import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        sessionStorage.getItem('accessToken')
        let getAccessToken = sessionStorage.getItem('accessToken');
        if(!getAccessToken && !sessionStorage.getItem('accessToken')) {
            alert("No tiene acceso a la siguiente ruta");
            return false;
        }
        
        return true;        
    }
}