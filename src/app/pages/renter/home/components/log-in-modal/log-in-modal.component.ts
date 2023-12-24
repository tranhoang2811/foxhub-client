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
  @Output() public onLogin = new EventEmitter<void>();

  public loginForm: FormGroup;
  public errorMessage: string = '';

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

    this.authService
      .login(loginCredentials)
      .subscribe({
        next: (token: string) => {
          this.setToken(token, this.loginForm.value.isRememberMe);
          this.closeModal();
        },
        error: (error: Error) => {
          this.errorMessage = error.message;
        },
      })
      .add(() => {
        this.onLogin.emit();
      });
  }

  private setToken(token: string, isRememberMe: boolean): void {
    if (isRememberMe) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
    localStorage.setItem('isRememberMe', String(isRememberMe));
  }
}
