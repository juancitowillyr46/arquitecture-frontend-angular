import { Injectable } from "@angular/core";
import { AuthorizedHttpService } from "./auth-http-gateway.service";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private restApi = environment.REST_API;

    constructor(private authHttpService: AuthorizedHttpService){

    }

    getAll<T>(path: string): Observable<T[]> {
        let url = this.getUrl(path);
        return this.authHttpService.get(url);
    }

    get<T>(path: string, id?: string | number): Observable<T> {
        let url = this.getUrl(path, id);
        return this.authHttpService.get<T>(url);
    }

    post<T>(path: string, data: any): Observable<any> {
        let url = this.getUrl(path);
        return this.authHttpService.post(url, data);
    }

    put<T>(path: string, id: string | number, data: T): Observable<any> {
        let url = this.getUrl(path, id);
        return this.authHttpService.put(url, data);
    }

    delete<T>(path: string, id: string | number): Observable<any> {
        let url = this.getUrl(path, id);
        return this.authHttpService.delete(url);
    }

    private getUrl(path: string, id?: string | number) {
        const url = `${this.restApi}/${path}`;
        return id ? `${url}/${id}` : url;
    }

}