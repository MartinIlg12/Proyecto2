import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http:HttpClient) { }

  private API_USERS="https://proyecto2-25510-default-rtdb.firebaseio.com/usuario.json"
  getUsuarios(): Observable<any>{
    return this.http.get(this.API_USERS)
  }
}
