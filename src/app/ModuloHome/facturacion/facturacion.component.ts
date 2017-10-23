import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { ObservableService, FacturaService, DetalleService,ProductoService } from '../../providers';
import { Factura, Detalle,Producto } from '../models/index';
import { HttpModule, Http } from '@angular/http';

 declare var $:any;
 declare var moment:any;
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  public hora;
  public fecha;
  public facturas: Factura[];
  public factura: Factura;
  public detalles: Detalle[];
  public detalle: Detalle;
  public productos: Producto[];
  constructor(private http: FacturaService, private http1: DetalleService,private http2: ProductoService) { }

  ngOnInit() {
    this.facturas = new Array<Factura>();
    this.detalle = new Detalle();
    this.factura = new Factura();
    this.lista();
  }
  public lista() {
    this.http.getAllFactura()
      .subscribe(response => {
        //console.log(response);
        this.facturas = response
      }
      );
  }
  public listaproductos() {
    this.http2.getAllProductos()
      .subscribe(response => {
        //console.log(response);
        this.productos = response
      }
      );
  }
  public createDetalle() {
    this.http1.insertarDetalle(this.detalle).subscribe(dato => { this.detalle = dato; console.log(this.detalle); })
  }
  public createFactura() {
    this.factura.pruFacFecha=this.generarFechaDescarga(this.fecha,this.hora);
    console.log(Factura);
    this.http.insertarFactura(this.factura).subscribe(dato => { this.factura = dato; console.log(this.factura); })
  }
public setFecha(e){
  this.fecha=e;

}
public setHora(e){
  this.hora=e;

}
public generarFechaDescarga(fecha: string, hora: string) {
    if (fecha && hora)
      return moment(`${fecha} ${hora}`, 'DD/MM/yyyy HH:mm').toDate();
    else if (fecha)
      return moment(fecha, 'DD/MM/yyyy').toDate();
    return null;
  }

}