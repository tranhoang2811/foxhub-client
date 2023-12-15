import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditGuestNumberModalComponent } from './components/edit-guest-number-modal/edit-guest-number-modal.component';
import { EditTimeModalComponent } from './components/edit-time-modal/edit-time-modal.component';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  constructor(private modelService: NgbModal) {}
  public openEditTimeModal(): void {
    const EditTimeModal = this.modelService.open(EditTimeModalComponent, {
      centered: true,
      size: 'lg',
      modalDialogClass: 'log-in-modal',
    });
  }
  public openEditGuestNumberModal(): void {
    const EditGuestNumberModal = this.modelService.open(EditGuestNumberModalComponent, {
      centered: true,
      modalDialogClass: 'log-in-modal',
    });
  }
}
