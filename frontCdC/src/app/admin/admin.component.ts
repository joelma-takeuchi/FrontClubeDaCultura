import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProduto()
    this.findAllCategoria()
  }
  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProduto = resp
    })
  }
  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategoria = resp
    })
  }
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }

}
