import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { CategoriaService } from './services/categoria.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    LoginService,
    CategoriaService,
    
  ]
})
export class CoreModule { }
