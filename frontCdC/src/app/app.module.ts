import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { PlanosComponent } from './planos/planos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AdminComponent } from './admin/admin.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DelProdutoComponent } from './del-produto/del-produto.component';
import { DelCategoriaComponent } from './del-categoria/del-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    PlanosComponent,
    LoginComponent,
    CadastroComponent,
    AdminComponent,
    PutProdutoComponent,
    PutCategoriaComponent,
    DelProdutoComponent,
    DelCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
