import { Component, OnInit, Input } from '@angular/core';
import { Route, ActivatedRoute, Params } from '@angular/router';
import { FacturaService } from "app/providers";
import { Cabecera } from "app/models";
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})

export class CabeceraComponent implements OnInit {
  public cabeceras: Cabecera[];
  public cabecera: Cabecera;
  public id: number;
  public cargar: boolean;
  @Input() valor: any;
  
  constructor(private http: FacturaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cabecera = new Cabecera();
    this.cabeceras = new Array<Cabecera>();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.lista2(this.id);
    //console.log(this.lista2);
  }

  lista2(id) {
    console.log(id);
    this.cargar = true;
    this.http.getOne(id).subscribe(
      recibe => {
        this.cabecera = recibe
        console.log(this.cabecera);
        this.cargar = false;
      })

  }
}
