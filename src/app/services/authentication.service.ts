import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../shared/Constants';
import { Http, Response } from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  login(hs_usuario){    
    return this._http.post(Constants.URL_BACK + '/login', hs_usuario);
  }

  authenticationStore(hs_usuario,mysecstring){
    let myseckey = btoa(mysecstring);
    localStorage.setItem('security',myseckey);
    localStorage.setItem('codigo',hs_usuario.codigo);
    localStorage.setItem('email',hs_usuario.email);
    localStorage.setItem('rol',hs_usuario.rol);
  }
}
