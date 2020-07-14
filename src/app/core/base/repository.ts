import { Observable } from 'rxjs';

export abstract class Repository<T> {
    abstract create(entity: T): Observable<T>;
    abstract readById(id: number): Observable<T>;
    abstract update(entity: T): Observable<T>;
    abstract delete(entity: T): Observable<T>;
    abstract all(entiry: T): Observable<T[]>;
}