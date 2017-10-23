import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { ObservableService, DetalleService, FacturaService } from '../../providers';
import { Detalle, Factura } from '../models/index';
import { HttpModule, Http } from '@angular/http';
import { Route, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-facturadetalle',
  templateUrl: './facturadetalle.component.html',
  styleUrls: ['./facturadetalle.component.css']
})
export class FacturadetalleComponent implements OnInit {
  public detalles: Detalle[];
  public facturas: Factura[];

  public detalle: Detalle;
  public factura: Factura;
  public id: number;
  constructor(private http: DetalleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.detalles = new Array<Detalle>();
    this.facturas = new Array<Factura>();
    this.detalle = new Detalle();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.lista();
  }

  public lista() {
    this.http.getAllDetalle()
      .subscribe(response => {
        console.log(response);
        this.detalles = response
      }
      );
  }
  public lista2(id) {
    this.http.getUnoDetalle(id).subscribe(recibe => { console.log(recibe); this.detalles = recibe })
  }

}
