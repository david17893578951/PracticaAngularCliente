import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  public paises  = [{
    nombre: "Ecuador"},{ nombre: "Colombia"},{ nombre: "Peru"},{ nombre: "Chile"},{ nombre: "Mexico"}];
  constructor() { }

  ngOnInit() {
   // console.log(this.paises);
    
  }

}
