import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
