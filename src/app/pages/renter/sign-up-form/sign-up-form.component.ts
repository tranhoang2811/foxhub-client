import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent {
  public signupForm: FormGroup;
  public errorMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      confirmPassword: this.formBuilder.control(''),
      policyAgreement: this.formBuilder.control(false),
    });
  }

  public onSubmit(): void {
    this.router.navigate(['/renter/home']);
    console.log(this.signupForm.value);
    // this.authService.signup(this.signupForm.value).subscribe({
    //   next: () => {

    //     this.errorMessage = '';
    //   },
    //   error: (error) => {
    //     this.errorMessage = error.message;
    //   },
    // });
  }
}
