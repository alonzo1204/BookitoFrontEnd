import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public codigo = '';
  public contraseña = '';
  public loginForm: any = {};
  public userData = {};
  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.loginForm = {
      codigo: '',
      password: '',
    }
  }

  async login(){
    await this._authenticationService.login(this.loginForm).toPromise().then((result => {
      console.log('Result ',result);
      Swal.fire({
        type: 'success',
        title: 'Perfecto!',
        text: 'Logueado exitosamente',
      })
      this.userData = result;
      let mysecstring = this.loginForm.codigo + ':' + this.loginForm.password;
      this._authenticationService.authenticationStore(this.userData,mysecstring);

    })).catch(err => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: err.error.message,
      })
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
