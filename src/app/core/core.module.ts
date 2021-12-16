import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { CategoriaService } from './services/categoria.service';
import { SubcategoriaService } from './services/subcategoria.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    LoginService,
    CategoriaService,
    SubcategoriaService
    
  ]
})
export class CoreModule { }
