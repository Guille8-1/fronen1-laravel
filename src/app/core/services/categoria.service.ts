import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment"
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url_base = environment.url_local_api

  constructor(protected http:HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(`${this.url_base}/categoria`);
  }
  storeCategoria(cate:Categoria){
    return this.http.post(`${this.url_base}/categoria`,cate)
  }
  showCategoria(id: number){
    return this.http.get(`${this.url_base}/categoria/${id}`);
  }

  updateCategoria(datos: Categoria, id: number){
    return this.http.put(`${this.url_base}/categoria/${id}`, datos);
  }

  destroyCategoria(id: number){
    return this.http.delete(`${this.url_base}/categoria/${id}`);
  }
}
