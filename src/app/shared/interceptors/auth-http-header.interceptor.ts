import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthHttpHeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if( sessionStorage.getItem('accessToken') || sessionStorage.getItem('accessToken') != undefined ) {
            let accessToken: string = sessionStorage.getItem('accessToken');

            let cloneRequest = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            }); 
    
            return next.handle(cloneRequest);
        }

        return next.handle(request);
    }
}