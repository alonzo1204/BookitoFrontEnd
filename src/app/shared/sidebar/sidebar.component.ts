import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
