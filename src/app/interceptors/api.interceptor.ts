import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isRememberMe = JSON.parse(
      localStorage.getItem('isRememberMe') || 'false'
    );
    const token = isRememberMe
      ? localStorage.getItem('token')
      : sessionStorage.getItem('token');

    const httpRequest = request.clone({
      url: `${environment.apiUrl}${request.url}`,
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(httpRequest);
  }
}
