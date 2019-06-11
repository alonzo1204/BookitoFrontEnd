import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.css']
})
export class HandlerComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("security") != null){
      this._router.navigate(['/reglamento']);
    }else{
      this._router.navigate(['/login']);
    }
  }

}
