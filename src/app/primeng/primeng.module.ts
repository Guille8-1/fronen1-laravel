import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog'
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';

const modulos =[
  CommonModule,
  ButtonModule,
  TableModule,
  DialogModule,
  InputTextModule,
  InputTextareaModule,
  ToastModule
]


@NgModule({
  declarations: [],
  imports: modulos, 
  exports: modulos
})
export class PrimengModule { }
