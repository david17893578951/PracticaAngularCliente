import { Injectable } from '@angular/core';
import { ObservableService } from '../providers/observable.service';
import { config } from '../shared/smartadmin.config';

@Injectable()
export class ProductoService {
  constructor(private servicio: ObservableService) { }

  public getOne(id: number) {
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.producto.buscar}/${id}`)
  }

   public deleteProducto(id: number) {
    return this.servicio.getUrlServicioDelete(`${config.APIRest.url}${config.APIRest.producto.base}/${id}`)
  }

  public insertarProducto(producto) {
    return this.servicio.getUrlServicioPost(`${config.APIRest.url}${config.APIRest.producto.add}`, producto);
  }

  public actualizarProducto(producto) {
    return this.servicio.getUrlServicioPut(`${config.APIRest.url}${config.APIRest.producto.base}`, producto);
  }

  public getAllProductos() {    
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.producto.base}`);
  }

  public getAllCanalesByEstado(estado:string) {    
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.canal.listaEstado}/${estado}`);
  }
}