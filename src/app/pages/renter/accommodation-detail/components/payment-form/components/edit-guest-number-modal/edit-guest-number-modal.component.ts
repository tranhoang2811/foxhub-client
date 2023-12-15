import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-guest-number-modal',
  templateUrl: './edit-guest-number-modal.component.html',
  styleUrls: ['./edit-guest-number-modal.component.css']
})
export class EditGuestNumberModalComponent {
  constructor(
		private activeModal: NgbActiveModal,
	  ) {}
    count_adult = 0;
    count_children = 0;
    increment_adult() {
      this.count_adult++;
    }
  
    decrement_adult() {
      if (this.count_adult > 0) {
        this.count_adult--;
      }
    }
    increment_children() {
      this.count_children++;
    }
  
    decrement_children() {
      if (this.count_children > 0) {
        this.count_children--;
      }
    }
  
    public closeModal(): void {
      this.activeModal.close();
      }	
}
