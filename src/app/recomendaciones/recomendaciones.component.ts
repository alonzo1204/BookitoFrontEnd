import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  public categoriaForm = {};
  public categorias = [];
  constructor(public _categoriaService: CategoriaService) { }
  
  ngOnInit() {
    this.categoriaForm = {
      nombre: '',
      descripcion: '',
      codigo: '',
    }
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
