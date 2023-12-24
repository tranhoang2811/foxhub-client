import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry } from 'rxjs';
import { ILoginCredentials, ISignupInformation } from 'src/app/interfaces/auth';
import { ErrorService } from 'src/app/services/error.service';
import { IUser } from '../interfaces/user';

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
      .post('/auth/login', credentials, {
        responseType: 'text',
      })
      .pipe(retry(2), catchError(this.errorService.handleError));
  }

  public signup(signupInformation: ISignupInformation): Observable<void> {
    return this.httpClient
      .post<void>('/auth/signup', signupInformation)
      .pipe(retry(2), catchError(this.errorService.handleError));
  }

  public getUserProfile(): Observable<IUser> {
    return this.httpClient
      .get<IUser>('/auth/profile')
      .pipe(retry(2), catchError(this.errorService.handleError));
  }
}
