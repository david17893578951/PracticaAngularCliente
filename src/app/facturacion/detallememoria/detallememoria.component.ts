import { Component, OnInit, Input } from '@angular/core';
import { Detalle, Producto, Cabecera } from "app/models";
import { DetalleService, ProductoService, FacturaService } from "app/providers";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detallememoria',
  templateUrl: './detallememoria.component.html',
  styleUrls: ['./detallememoria.component.css']
})
export class DetallememoriaComponent implements OnInit {
  public detalles: Detalle[];
  public detallesmemori: Detalle[];
  public productos: Producto[];
  public factura: Cabecera;
  public produ: Producto;
  public detalle: Detalle;
  @Input() id: any;
  public cargar: boolean;
  public cargarPro: boolean;
  public cantidad: number;
  public totalpag: number;
  public total: number;
  public costo: number;

  constructor(private http: DetalleService, private route: ActivatedRoute, private http1: ProductoService, private http2: FacturaService) { }
  /*-------------------------------*/

  ngOnInit() {
    this.lista();
    this.detalles = new Array<Detalle>();
    this.productos = new Array<Producto>();
    this.detallesmemori = new Array<Detalle>();
    this.detalle = new Detalle();
    this.produ = new Producto();
    this.factura = new Cabecera();
    //this.lista();
    this.listaProductos();
  }

  /* public actualizarValorFactura() {
     this.factura.pruFacCodigo =  this.id 
     this.factura.pruFacTota =  this.totalpag
    this.http2.actualizarFactura(this.factura).subscribe(dato => { this.factura = dato; console.log(this.factura); })
   }*/

  public lista() {
    this.http.getAllDetalle()
      .subscribe(response => {
        //console.log(response);
        this.detallesmemori = response
      }
      );
  }
  public listaProductos() {
    this.cargarPro = true;
    this.http1.getAllProductos()
      .subscribe(response => {
        // console.log(response);
        this.productos = response
        console.log(this.productos);
        this.cargarPro = false;
      }
      );
  }

  public listamemoriDetalle() {
    this.detalle = new Detalle();
    this.detalle.pruFactura = { pruFacCodigo: this.id }
    this.detalle.pruProducto = { pruProCodigo: this.produ.pruProCodigo }
    let p = this.productos.find(resul => resul.pruProCodigo == this.produ.pruProCodigo);
    this.costo = p.pruProCosto * this.cantidad;
    this.detalle.pruDetaTota = this.costo;
    this.detallesmemori.push(this.detalle)
    this.totalpag = 0;
    for (let o of this.detallesmemori) {
      this.totalpag = this.totalpag + o.pruDetaTota;
    }
    //console.log(this.detallesmemori);
  }

  public creatememoriDetalle() {
    this.http.insertarDetalle(this.detallesmemori).subscribe(dato => { this.detallesmemori = dato; console.log(this.detallesmemori); })
    this.factura.pruFacCodigo = this.id
    this.factura.pruFacTota = this.totalpag
    console.log(this.totalpag);
    this.http2.actualizarFactura(this.factura).subscribe(dato => { this.factura = dato; console.log(this.factura); })
  }

}
