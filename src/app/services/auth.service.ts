import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ILoginCredentials, ISignupInformation } from 'src/app/interfaces/auth';
import { ErrorService } from 'src/app/services/error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public login(credentials: ILoginCredentials): Observable<string> {
    return this.httpClient
      .post<string>('/auth/login', credentials)
      .pipe(retry(2), catchError(this.errorService.handleError));
  }

  public signup(signupInformation: ISignupInformation): Observable<void> {
    return this.httpClient
      .post<void>('/auth/signup', signupInformation)
      .pipe(retry(2), catchError(this.errorService.handleError));
  }
}
