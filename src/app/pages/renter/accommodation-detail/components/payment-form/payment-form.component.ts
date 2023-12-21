import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditGuestNumberModalComponent } from './components/edit-guest-number-modal/edit-guest-number-modal.component';
import { EditTimeModalComponent } from './components/edit-time-modal/edit-time-modal.component';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent {
  constructor(
    private modelService: NgbModal,
    private activeModal: NgbActiveModal
  ) {}

  public openEditTimeModal(): void {
    const editTimeModal = this.modelService.open(EditTimeModalComponent, {
      centered: true,
      modalDialogClass: 'edit-time-modal',
    });
  }

  public openEditGuestNumberModal(): void {
    const editGuestNumberModal = this.modelService.open(
      EditGuestNumberModalComponent,
      {
        centered: true,
        modalDialogClass: 'edit-guest-number-modal',
      }
    );
  }

  public closeModal(): void {
    this.activeModal.close();
  }
}
