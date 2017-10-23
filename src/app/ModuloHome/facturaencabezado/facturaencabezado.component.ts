import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { ObservableService, FacturaService } from '../../providers';
import { Factura } from '../models/index';
import { HttpModule, Http } from '@angular/http';

@Component({
  selector: 'app-facturaencabezado',
  templateUrl: './facturaencabezado.component.html',
  styleUrls: ['./facturaencabezado.component.css']
})
export class FacturaencabezadoComponent implements OnInit {
  public facturas: Factura[];
  public factura: Factura;

  constructor(private http: FacturaService) { }

  ngOnInit() {
    this.facturas = new Array<Factura>();
    this.factura = new Factura();
    this.lista();
  }
  public lista() {
    this.http.getAllFactura()
      .subscribe(response => {
        // console.log(response);
        this.facturas = response
      }
      );
  }

  public createFactura() {
    this.http.insertarFactura(this.factura).subscribe(dato => { this.factura = dato; console.log(this.factura); })
  }
  public setFactura(factura) {
    // console.log(pais);
    this.factura = factura;
  }
  public actualizarFactura() {
    this.http.actualizarFactura(this.factura).subscribe(dato => { this.factura = dato; console.log(this.factura); })
  }
  public eliminarFactura() {
    this.http.deleteFactura(this.factura.pruFacCodigo).subscribe(dato => { this.factura = dato; console.log(this.factura); })
  }

}
