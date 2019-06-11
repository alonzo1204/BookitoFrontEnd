import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { CategoriaService } from '../services/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public categoriaForm = {};
  public categorias = [];
  constructor(public _categoriaService: CategoriaService) { }
  
  ngOnInit() {
    this.categoriaForm = {
      nombre: '',
      descripcion: '',
      codigo: '',
    }
    console.log('Encrypt ', btoa("admin:p@55w0Rd"));
    this.loadCategories();
  }

  loadCategories(){
    this._categoriaService.getCategories().subscribe((result: any) => {
      this.categorias = result;
      console.log(this.categorias);
    })
  }

  deleteCategory(id){
    this._categoriaService.deleteCategory(id).subscribe((result: any) => {
      alert('Categoria eliminada con éxito');
      this.loadCategories();
    })
  }
  saveCategory(){
    this._categoriaService.saveCategory(this.categoriaForm).subscribe((result: any) => {
      alert("Categoria guardada");
      console.log(result);
      this.loadCategories();
    })
  }
}
