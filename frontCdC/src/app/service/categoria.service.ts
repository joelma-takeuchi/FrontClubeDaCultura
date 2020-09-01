import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token ={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllCategoria(){
    return this.http.get('http://localhost:9000/categoria',this.token)
  }
  getByIdCategoria(id: number){
    return this.http.get(`http://localhost:9000/categoria/${id}`,this.token)

  }
}
