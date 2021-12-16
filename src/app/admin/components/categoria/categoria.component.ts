import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { MessageService } from 'primeng/api';
import { SubCategoria } from 'src/app/core/interfaces/subcategoria';
import { SubcategoriaService } from 'src/app/core/services/subcategoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [MessageService]
})
export class CategoriaComponent implements OnInit {

  lista_categorias:Categoria[]=[];
  display: boolean = false;
  displaySub:boolean = false;
  displaySubcategorias:boolean = false
  subcategorias_lista:any ={};
  cargando:boolean = true


  categoriaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    detalle : new FormControl('')
  })

  subcategoriaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    categoria_id: new FormControl('')
  })

  constructor(private categoriaService: CategoriaService,
              private messageService: MessageService,
              private subCatService: SubcategoriaService) { }

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
  openNuevaSubCategoria(){
    this.displaySub=true;
  }

  showSubCategoriasDialog(id:number){
    this.cargando =true;
    this.displaySubcategorias = true;
    this.mostrarCategoria(id);
    this.subcategorias_lista = {};
  }

  guardarCategoria(){
    
    this.categoriaService.storeCategoria(this.categoriaForm.value).subscribe(
      (datos:any) => {
        // this.listarCategorias()
        this.lista_categorias.push(datos.data)
        this.display = false
        this.mostrarToast(datos.mensaje)
      },
      (error)=>{
        this.display=true
      }
    )
  }
  guardarSubCategoria(){
    
    this.subCatService.storeSubCategoria(this.subcategoriaForm.value).subscribe(
      (datos:any) => {
        // this.listarCategorias()
        // this.lista_categorias.push(datos.data)
        this.displaySub = false
        this.mostrarToast(datos.mensaje)
      },
      (error)=>{
       
      }
    )
  }

  mostrarCategoria(id: number){
    this.categoriaService.showCategoria(id).subscribe(
      (datos:any) => {
        this.displaySubcategorias = true
        this.subcategorias_lista=datos
        this.cargando=false
      },
      (error) => {

      }
    )
  }


  mostrarToast(valor: string) {
    this.messageService.add({severity:'success', summary:valor, detail:'Saved'});
}
}