import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthHttpErrorsInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const that = this;
        return next.handle(request).pipe(catchError(error => {
            if (error.status === 401) {
                alert('Please login to be able to access the service');
            } else if (error.status === 403) {
                alert('You are not allowed to perform this action');
            } else {
                alert('An error occured while contacting the server');
            }
            return throwError(error);
        }));
    }

    async presentAlert(message: string) {
       
    }


}