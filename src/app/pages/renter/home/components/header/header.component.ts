import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from '../log-in-modal/log-in-modal.component';
import { SignUpModalComponent } from '../sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private modelService: NgbModal) {}

  public openLogInModal(): void {
    const logInModal = this.modelService.open(LogInModalComponent, {
      centered: true,
      modalDialogClass: 'log-in-modal',
    });
  }

  public openSignUpModal(): void {
    const signUpModal = this.modelService.open(SignUpModalComponent, {
      centered: true,
      modalDialogClass: 'sign-up-modal',
    });
  }
}
