import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import omit from 'lodash/omit';
import { ILoginCredentials } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.css'],
})
export class LogInModalComponent {
  @Output() public onOpenSignupModal = new EventEmitter<void>();

  public loginForm: FormGroup;
  public errorMessage: string = '';
  private token: string = '';

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      isRememberMe: this.formBuilder.control(false),
    });
  }

  public closeModal(): void {
    this.activeModal.close();
  }

  public switchToSignUpModal(): void {
    this.onOpenSignupModal.emit();
  }

  public onSubmit(): void {
    const loginCredentials = omit(
      this.loginForm.value,
      'isRememberMe'
    ) as ILoginCredentials;

    this.authService.login(loginCredentials).subscribe({
      next: (token) => {
        this.setToken(token, this.loginForm.value.isRememberMe);
        this.closeModal();
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  private setToken(token: string, isRememberMe: boolean): void {
    this.token = token;
    if (this.loginForm.value.isRememberMe) {
      localStorage.setItem('token', this.token);
    } else {
      sessionStorage.setItem('token', this.token);
    }
  }
}
