import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [MessageService]
})
export class CategoriaComponent implements OnInit {

  lista_categorias:Categoria[]=[];
  display: boolean = false;
  categoriaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    detalle : new FormControl('')
  })

  constructor(private categoriaService: CategoriaService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }
  listarCategorias(){
    this.categoriaService.getCategorias().subscribe(
      (datos:Categoria[]) => {
        console.log(datos),
        this.lista_categorias = datos
      },
      (error) => {
        console.log("error")
      }
    )
    
  }

  openNuevaCategoria(){
    this.display=true;
  }

  guardarCategoria(){
    this.display = false;
    this.categoriaService.storeCategoria(this.categoriaForm.value).subscribe(
      (datos:any) => {
        // this.listarCategorias()
        this.display=false
        this.lista_categorias.push(datos.data)
        this.mostrarToast(datos.mensaje)
      },
      (error)=>{
        this.display=true
      }
    )
  }

  mostrarToast(valor: string) {
    this.messageService.add({severity:'success', summary:valor, detail:'Saved'});
}
}
