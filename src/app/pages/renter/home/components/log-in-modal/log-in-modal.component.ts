import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpModalComponent } from '../sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.css'],
})
export class LogInModalComponent {
  @Input() public openSignUpModal!: Function;

  constructor(
    private activeModal: NgbActiveModal,
    private modelService: NgbModal
  ) {}

  public closeModal(): void {
    this.activeModal.close();
  }

  public switchToSignUpModal(): void {
    this.closeModal();
    this.modelService.open(SignUpModalComponent, {
      centered: true,
      modalDialogClass: 'sign-up-modal',
    });
  }
}
