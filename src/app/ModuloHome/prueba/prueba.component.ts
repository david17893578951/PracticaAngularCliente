import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public paises: any = [{
    nombre: "Ecuador",
    provincias: [
      {
        nombre: "Imbabura",
        cantons: [
          {
            nombre: "ibarra",
            numhabitans: ["25", "25"]
          }
        ]
      }
    ]
  }];
  public pais: any;
  public provincia: any;
  public canton: any;
  public numhabitan="";

  constructor() { }

  ngOnInit() {
    // console.log(this.paises);

    this.pais = {};
    this.provincia = {};
    this.canton = {};
    this.numhabitan = "";
  }
  public createPais() {
    // console.log(this.pais);
    this.paises.unshift(this.pais);
    this.pais = {};
  }
  public setPais(pais) {
    // console.log(pais);
    this.pais = pais;
  }
  public setProvincia(provincia) {
    // console.log(pais);
    this.provincia = provincia;
  }
  public setCanton(canton) {
    // console.log(pais);
    this.canton = canton;
  }

  public createProvincia() {
    if (this.pais.provincias)
      this.pais.provincias.push(this.provincia);
    else
      this.pais.provincias = [this.provincia];
    this.provincia = {};
    console.log(this.pais);

  }


  public createCanton() {
    if (this.provincia.cantons)
      this.provincia.cantons.push(this.canton);
    else
      this.provincia.cantons = [this.canton];
    this.canton = {};
  }


  public createNumhabitan() {
    if (this.canton.numhabitans)
      this.canton.numhabitans.push(this.numhabitan);
    else
      this.canton.numhabitans = [this.numhabitan];
    this.numhabitan = "";
  }

}
