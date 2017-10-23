import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {
public mesage:string;
  constructor() { }

  ngOnInit() {
    console.log("Cabeza");
    
    this.mesage = "Nro de la Factura";

  }
}
