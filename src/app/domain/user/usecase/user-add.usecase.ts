import { Injectable } from '@angular/core';
import { UserDto } from "../model/user.dto";
import { UseCase } from "../../../core/base/use-case";
import { Observable } from "rxjs";
import { UserRepository } from '../repository/user.repository';
import { User } from '../model/user.entity';

@Injectable({
    providedIn: 'root'
})
export class UserAddUseCase implements UseCase<Number, UserDto> {

    constructor(private userRepository: UserRepository) {

    }
    
    public execute(id: number): Observable<UserDto>{
        return this.userRepository.readById(id);
    }
} 