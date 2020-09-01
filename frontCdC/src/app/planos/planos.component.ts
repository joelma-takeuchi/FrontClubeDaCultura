import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.findAllProdutos()
    this.findAllCategorias()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {this.listaProdutos = resp})
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {this.listaCategorias = resp})
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {this.categoria = resp;})
  }
}
