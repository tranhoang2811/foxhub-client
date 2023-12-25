import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-time-modal',
  templateUrl: './edit-time-modal.component.html',
  styleUrls: ['./edit-time-modal.component.css'],
})
export class EditTimeModalComponent {
  @Input() timeRange!: Record<string, string>;
  @Output() onDateSave = new EventEmitter<Record<string, string>>();
  public model: NgbDateStruct = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null = null;
  public toDate: NgbDate | null = null;
  public dateParser = inject(NgbDateParserFormatter);
  private calendar = inject(NgbCalendar);

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.fromDate = NgbDate.from(
      this.dateParser.parse(this.timeRange['checkIn'])
    );
    this.toDate = NgbDate.from(
      this.dateParser.parse(this.timeRange['checkOut'])
    );
  }

  public onDateSelection(date: NgbDate) {
    const currentDate = this.calendar.getToday();
    if (date.before(currentDate)) {
      return;
    }

    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  public isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  public isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  public isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  public validateInput(
    currentValue: NgbDate | null,
    input: string
  ): NgbDate | null {
    const parsed = this.dateParser.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  public closeModal(): void {
    this.activeModal.close();
  }

  public deleteDate() {
    this.fromDate = null;
    this.toDate = null;
  }

  public saveDate() {
    this.onDateSave.emit({
      checkIn: this.dateParser.format(this.fromDate),
      checkOut: this.dateParser.format(this.toDate),
    });
    this.closeModal();
  }
}
