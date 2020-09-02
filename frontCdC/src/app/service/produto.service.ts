import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
  token={
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllProduto() {
    return this.http.get('http://localhost:9000/produto',this.token)
  }
  postProduto(produto: Produto){
    return this.http.post('http://localhost:9000/produto', produto ,this.token)
  }
}

