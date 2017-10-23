import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { ObservableService, ProductoService } from '../../providers';
import { Producto } from '../models/index';
import { HttpModule, Http } from '@angular/http';

@Component({
  selector: 'app-facturaproducto',
  templateUrl: './facturaproducto.component.html',
  styleUrls: ['./facturaproducto.component.css']
})
export class FacturaproductoComponent implements OnInit {
  public productos: Producto[];
  public producto: Producto;
  //public urlProductos = 'http://localhost:8080/producto';
  constructor(private http: ProductoService) {
  }

  ngOnInit() {
    this.productos = new Array<Producto>();
    this.producto = new Producto();
    this.lista();
  }

  public lista() {
    this.http.getAllProductos()
      .subscribe(response => {
        // console.log(response);
        this.productos = response
      }
      );
  }

  public createProducto() {
    this.http.insertarProducto(this.producto).subscribe(dato => {this.producto=dato;console.log(this.producto);})
  }
   public setProducto(producto) {
    this.producto = producto;
  }
  public actualizarProducto() {
    this.http.actualizarProducto(this.producto).subscribe(dato => {this.producto=dato;console.log(this.producto);})
  }
  public eliminarProducto() {
    this.http.deleteProducto(this.producto.pruProCodigo).subscribe(dato => {this.producto=dato;console.log(this.producto);})
  }
  


}