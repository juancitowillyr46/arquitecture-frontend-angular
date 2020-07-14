import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthorizedHttpService } from './base/auth-http-gateway.service';
import { AuthHttpHeaderInterceptor } from '../shared/interceptors/auth-http-header.interceptor';
import { AuthHttpErrorsInterceptor } from '../shared/interceptors/auth-http-errors.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [

    /* Services */
    AuthorizedHttpService,

    /* Interceptors */
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpErrorsInterceptor,
      multi: true
    },
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
