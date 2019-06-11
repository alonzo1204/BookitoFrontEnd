import { CanActivate, Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticateRoute implements CanActivate {
    constructor(private _routes: Router, private _myroute: ActivatedRoute){}
    canActivate(){
        if(localStorage.getItem('security') != null){
            return true;
        }else{
            this._routes.navigate(['/login']);
            return false;
        }
    }
}