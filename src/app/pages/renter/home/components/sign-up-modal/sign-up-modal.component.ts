import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css'],
})
export class SignUpModalComponent {
  @Output() public onOpenLogInModal = new EventEmitter<void>();

  constructor(private activeModal: NgbActiveModal, private router: Router) {}

  public closeModal(): void {
    this.activeModal.close();
  }

  public switchToLogInModal(): void {
    this.onOpenLogInModal.emit();
  }

  public gotoSignupPage(): void {
    this.router.navigate(['/renter/sign-up']);
    this.closeModal();
  }
}
