import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from '../log-in-modal/log-in-modal.component';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css'],
})
export class SignUpModalComponent {
  constructor(
    private activeModal: NgbActiveModal,
    private modelService: NgbModal
  ) {}

  public closeModal(): void {
    this.activeModal.close();
  }

  public switchToLogInModal(): void {
    this.closeModal();
    this.modelService.open(LogInModalComponent, {
      centered: true,
      modalDialogClass: 'log-in-modal',
    });
  }
}
