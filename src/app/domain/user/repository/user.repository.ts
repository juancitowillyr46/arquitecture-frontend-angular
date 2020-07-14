import { Repository } from "../../../core/base/repository";
import { User } from "../model/user.entity";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthorizedHttpService } from "../../../core/base/auth-http-gateway.service";
import { UserDto } from '../model/user.dto';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataService } from "../../../core/base/data.service";

@Injectable({
    providedIn: 'root'
})
export class UserRepository extends Repository<UserDto> {

    // private resource = environment.REST_API + 'elephants/';

    constructor(private dataService: DataService){
        super();
    }

    create(user: User): Observable<UserDto> {
        return null;
        // return this.dataService.post()
        // return this.authHttpService.get<User>(this.resource + "1").pipe(map(r => {
        //     let userDto: UserDto = {
        //         id: r.id,
        //         name: r.name,
        //         birthday: r.birthday,
        //         family: r.family
        //     }
        //     return userDto;
        // }));
    }

    readById(id: number): Observable<UserDto> {
        return this.dataService.get<User>('elephants', id).pipe(map(r => {
            let userDto: UserDto = {
                id: r.id,
                name: r.name,
                birthday: r.birthday,
                family: r.family
            }
            return userDto;
        }));
    }

    update(user: User): Observable<UserDto> {
        return null;
    }

    delete(user: User): Observable<UserDto> {
        return null;
    }

    all(user: User): Observable<UserDto[]> {
        return null;
    }
}