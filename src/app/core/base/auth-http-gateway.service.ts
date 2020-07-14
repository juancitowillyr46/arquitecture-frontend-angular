import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizedHttpService {

    constructor(private http: HttpClient) 
    {
        
    }

    public get<T>(path: string): Observable<T> {
        const subject = new Subject<any>();
        this.http.get<T>(path)
            .subscribe(
                data => subject.next(data),
                error => {
                    // this.authErrorHandler(error);
                    subject.error(error);
                });

        return subject.asObservable();
    }

    public post(path: string, parsedBody: any): Observable<Response> {
        const subject = new Subject<any>();

        this.http.post(path, parsedBody)
            .subscribe(data => subject.next(data), error => {
                // this.authErrorHandler(error);
                subject.error(error);
            });

        return subject.asObservable();
    }

    public put(path: string, parsedBody: any): Observable<Response> {
        const subject = new Subject<any>();

        this.http.put(path, parsedBody)
            .subscribe(data => subject.next(data), error => {
                // this.authErrorHandler(error);
                subject.error(error);
            });

        return subject.asObservable();
    }

    public delete(path: string): Observable<Response> {
        const subject = new Subject<any>();

        this.http.delete(path, { withCredentials: true })
            .subscribe(data => subject.next(data), error => {
                // this.authErrorHandler(error);
                subject.error(error);
            });

        return subject.asObservable();
    }

}