import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http:HttpClient) { }
  private API_PERSONAL="http://localhost:3000/personal"

  getPersonal():  Observable<any>{
    return this.http.get(this.API_PERSONAL)
  }
}
