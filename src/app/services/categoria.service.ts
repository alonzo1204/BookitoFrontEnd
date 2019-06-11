import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    private categorias_url = Constants.URL_BACK_API + '/categorias'

    constructor(private http: HttpClient) { }

    getCategories(){
        const header = new HttpHeaders()
            .set('Content-type', 'application/json')
            .append('Authorization', 'Basic ' + localStorage.getItem('security'));
        return this.http.get(this.categorias_url,{headers: header});
    }

    saveCategory(obj){
        const header = new HttpHeaders()
            .set('Content-type', 'application/json')
            .append('Authorization', 'Basic ' + localStorage.getItem('security'));
        return this.http.post(this.categorias_url + '/save',obj,{headers: header});
    }

    deleteCategory(id){
        const header = new HttpHeaders()
            .set('Content-type', 'application/json')
            .append('Authorization', 'Basic ' + localStorage.getItem('security'));
        return this.http.delete(this.categorias_url + '/delete' + id, {headers: header});
    }

}
