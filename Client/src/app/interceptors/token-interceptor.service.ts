import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DataSharingService } from '../service/data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  userData;
  tokens;
  constructor(private authService: DataSharingService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.userData =  this.authService.getUserData();
    this.tokens = this.userData.source._value;
    const token = this.tokens.token;
    if (token) {
      const privateReq = request.clone({
        headers: request.headers.set("Authorization", "Bearer ".concat(token)),      
      }); 
      return next.handle(privateReq)
    } 
    return next.handle(request)
  }
}
