import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.css'],
})
export class LogInModalComponent {
  constructor(private activeModal: NgbActiveModal) {}

  public closeModal(): void {
    this.activeModal.close();
  }
}
