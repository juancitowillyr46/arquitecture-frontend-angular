import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { UserAddUseCase } from 'src/app/domain/user/usecase/user-add.usecase';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [UserAddUseCase]
})
export class HomeModule { }
