import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  logar(userLogin: UserLogin) {
  return this.http.post('http://localhost:9000/usuario/logar', userLogin)
  }
  cadastrar(user: User) {
    return this.http.post('http://localhost:9000/usuario/cadastrar', user)
}
btnSair(){
  let ok = false
  let token = localStorage.getItem('token')

  if(token != null){
    ok=true
  }
  return ok
}
btnLogin(){

  let ok = false
  let token = localStorage.getItem('token')

  if(token == null){
    ok=true
  }
  return ok
}
admin(){
  let ok = false
  let email = localStorage.getItem('email')
  if(email == 'admin@gmail.com'){
    ok = true
  }
  return ok
}
}
