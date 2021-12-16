import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  items:any[] =[];

  constructor() { }

  ngOnInit(): void {
    
    this.items = [
      {
        label:'Start',
        icon:'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label:'Product',
        icon:'pi pi-fw pi-product',
        routerLink:'/productos'
      },
      {
        label:'Log In',
        icon: 'pi pi-fw pi-user',
        routerLink:'/auth/login',
        items:[]
      }
    ]
  }
}
