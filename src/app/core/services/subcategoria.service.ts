import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SubCategoria } from '../interfaces/subcategoria';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  url_base = environment.url_local_api

  constructor(private http: HttpClient) { }

  getSubCategorias(){
    return this.http.get<SubCategoria[]>(`${this.url_base}/subcategoria`);
  }
  storeSubCategoria(subcate:SubCategoria){
    return this.http.post(`${this.url_base}/subcategoria`,subcate)
  }
  showSubCategoria(id: number){
    return this.http.get(`${this.url_base}/subcategoria/${id}`);
  }

  updateSubCategoria(datos: SubCategoria, id: number){
    return this.http.put(`${this.url_base}/subcategoria/${id}`, datos);
  }

  destroySubCategoria(id: number){
    return this.http.delete(`${this.url_base}/subcategoria/${id}`);
  }
}
