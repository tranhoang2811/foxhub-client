import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-guest-number-modal',
  templateUrl: './edit-guest-number-modal.component.html',
  styleUrls: ['./edit-guest-number-modal.component.css'],
})
export class EditGuestNumberModalComponent {
  @Input() availablePeople!: number;
  @Input() numberOfGuest!: Record<string, number>;
  @Output() onSaveNumberOfGuest = new EventEmitter<Record<string, number>>();
  public numberOfAdult: number = 0;
  public numberOfChildren: number = 0;
  public isMaxNumberOfGuest: boolean =
    this.availablePeople === this.numberOfAdult + this.numberOfChildren;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.numberOfAdult = this.numberOfGuest['numberOfAdult'] ?? 0;
    this.numberOfChildren = this.numberOfGuest['numberOfChildren'] ?? 0;
  }

  public increaseNumberOfAdult(): void {
    this.numberOfAdult++;
    this.updateIsMaxNumberOfGuest();
  }

  public decreaseNumberOfAdult(): void {
    if (this.numberOfAdult > 0) {
      this.numberOfAdult--;
    }
    this.updateIsMaxNumberOfGuest();
  }

  public increaseNumberOfChildren(): void {
    this.numberOfChildren++;
    this.updateIsMaxNumberOfGuest();
  }

  public decreaseNumberOfChildren(): void {
    if (this.numberOfChildren > 0) {
      this.numberOfChildren--;
    }
    this.updateIsMaxNumberOfGuest();
  }

  public closeModal(): void {
    this.activeModal.close();
  }

  public saveNumberOfGuest(): void {
    this.onSaveNumberOfGuest.emit({
      numberOfAdult: this.numberOfAdult,
      numberOfChildren: this.numberOfChildren,
    });
    this.closeModal();
  }

  public updateIsMaxNumberOfGuest(): void {
    this.isMaxNumberOfGuest =
      this.availablePeople === this.numberOfAdult + this.numberOfChildren;
  }
}
