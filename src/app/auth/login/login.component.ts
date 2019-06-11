import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public codigo = '';
  public contraseña = '';
  public loginForm = {};
  constructor() { }

  ngOnInit() {
    this.loginForm = {
      codigo: '',
      password: '',
    }
  }

  login(){
    console.log(this.loginForm);
  }

}
