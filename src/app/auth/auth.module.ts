import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule}from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http'

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CoreModule } from '../core/core.module';
import { PrimengModule } from '../primeng/primeng.module';
import { AuthInterceptorService } from '../auth-interceptor.service';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    PrimengModule,
    TableModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true

    }
  ]
})
export class AuthModule { }
