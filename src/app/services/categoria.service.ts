import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    backendUrl =  "http://localhost:8090/categorias";

    constructor(private http: HttpClient) { }

    getCategories(){
        let endpoint = this.backendUrl;
        let header = new HttpHeaders({'Authorization': "Basic " + btoa("admin:p@55w0Rd")})
        console.log('my header ', header);
        return this.http.get(endpoint,{headers: header});
    }

    saveCategory(obj){
        let endpoint = this.backendUrl + "/save";
        return this.http.post(endpoint,obj);
    }

    deleteCategory(id){
        let endpoint = this.backendUrl + "/delete/" + id;
        let header = new HttpHeaders({'Authorization': "Basic " + btoa("admin:p@55w0Rd")})
        console.log('my header ', header);
        return this.http.delete(endpoint, {headers: header});
    }

}
