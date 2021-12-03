import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {
    path:'',
    component: ProductosComponent
  },
  {
    path:':id',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
