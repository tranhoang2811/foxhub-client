import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-guest-number-modal',
  templateUrl: './edit-guest-number-modal.component.html',
  styleUrls: ['./edit-guest-number-modal.component.css'],
})
export class EditGuestNumberModalComponent {
  constructor(private activeModal: NgbActiveModal) {}
  numberOfAdult = 0;
  numberOfChildren = 0;
  public increaseNumberOfAdult() {
    this.numberOfAdult++;
  }

  public decreaseNumberOfAdult() {
    if (this.numberOfAdult > 0) {
      this.numberOfAdult--;
    }
  }
  public increaseNumberOfChildren() {
    this.numberOfChildren++;
  }

  public decreaseNumberOfChildren() {
    if (this.numberOfChildren > 0) {
      this.numberOfChildren--;
    }
  }

  public closeModal(): void {
    this.activeModal.close();
  }
}
