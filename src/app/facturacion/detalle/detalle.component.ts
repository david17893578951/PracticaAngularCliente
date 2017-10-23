import { Component, OnInit, Input } from '@angular/core';
import { Detalle, Producto } from "app/models";
import { DetalleService, ProductoService } from "app/providers";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public detalles: Detalle[];
  public productos: Producto[];
  public produ: Producto;
  public detalle: Detalle;
  @Input() id: any;
  public cargar: boolean;
  public cargarPro: boolean;
  public cantidad: number;
  constructor(private http: DetalleService, private route: ActivatedRoute, private http1: ProductoService) { }
  ngOnInit() {
    
    this.detalles = new Array<Detalle>();
    this.productos = new Array<Producto>();
    this.detalle = new Detalle();
    this.produ = new Producto();
    this.lista1(this.id);
    this.listaProductos()
  }

  lista1(id) {
    console.log(id);
    this.cargar = true;
    this.http.getUnoDetalle(id).subscribe(
      recibe => {
        this.detalles = recibe
        console.log(this.detalles);
        this.cargar = false;
      })
  }
  
  public listaProductos() {
    this.cargarPro = true;
    this.http1.getAllProductos()
      .subscribe(response => {
        // console.log(response);
        this.productos = response
        this.cargarPro = false;
      }
      );
  }

  public createDetalle() {
    this.detalle.pruFactura = { pruFacCodigo: this.id }
    this.detalle.pruProducto = { pruProCodigo: this.produ.pruProCodigo }
    this.detalle.pruDetaTota=this.cantidad+5;
    this.http.insertarDetalle(this.detalle).subscribe(dato => { this.detalle = dato; console.log(this.detalle); })
  }
}
