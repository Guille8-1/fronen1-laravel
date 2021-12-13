import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetalleComponent } from '../producto/components/producto-detalle/producto-detalle.component';
import { ProductoModule } from '../producto/producto.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaComponent,
    children: [
      {
        path: '',
        component:DashboardComponent
      },
      {
        path:'producto',
        component:ProductoComponent
      },
      {
        path:'categoria',
        component:CategoriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
