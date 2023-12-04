import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from '../../home/components/log-in-modal/log-in-modal.component';
import { SignUpModalComponent } from '../../home/components/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css'],
})
export class HeaderNavBarComponent {
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
