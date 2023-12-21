import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-guest-number-modal',
  templateUrl: './edit-guest-number-modal.component.html',
  styleUrls: ['./edit-guest-number-modal.component.css'],
})
export class EditGuestNumberModalComponent {
  public numberOfAdult: number = 0;
  public numberOfChildren: number = 0;

  constructor(private activeModal: NgbActiveModal) {}

  public increaseNumberOfAdult(): void {
    this.numberOfAdult++;
  }

  public decreaseNumberOfAdult(): void {
    if (this.numberOfAdult > 0) {
      this.numberOfAdult--;
    }
  }
  public increaseNumberOfChildren(): void {
    this.numberOfChildren++;
  }

  public decreaseNumberOfChildren(): void {
    if (this.numberOfChildren > 0) {
      this.numberOfChildren--;
    }
  }

  public closeModal(): void {
    this.activeModal.close();
  }
}
