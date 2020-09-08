import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  categoria: Categoria = new Categoria()


  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }
  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp;
    })
  }

}
