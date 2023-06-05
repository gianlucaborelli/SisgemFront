import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Custumer } from 'src/app/models/custumer/custumer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustumerService {

  baseUrl:String = 'http://localhost:8080'
  
  constructor(private http: HttpClient) { }

  findAll():Observable<Custumer[]>{
    const url = `${this.baseUrl}/clientes`
    return this.http.get<Custumer[]>(url);
  }

  delete(id: number):Observable<void>{
    const url = `${this.baseUrl}/clientes/${id}`;
    return this.http.delete<void>(url);
  }
}
