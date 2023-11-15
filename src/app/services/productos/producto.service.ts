import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http:HttpClient) { }

  private API_PRODUCTO="http://localhost:3000/productos"

  getProducts(): Observable<any>{
    return this.http.get(this.API_PRODUCTO)
  }

  postProductos(producto:any): Observable <any>{
    return this.http.post(this.API_PRODUCTO,producto)

  
  }

  putProductos(producto:any, id:any):Observable<any>{
    
   this.API_PRODUCTO= `${this.API_PRODUCTO}/${id}` 
    
    return this.http.put(this.API_PRODUCTO,producto)
  }
  deleteProducto(id:any):Observable<any>{

   this.API_PRODUCTO=`${this.API_PRODUCTO}/${id}`

    return this.http.delete(this.API_PRODUCTO)
  }
}
