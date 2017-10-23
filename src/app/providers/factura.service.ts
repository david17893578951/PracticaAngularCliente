import { Injectable } from '@angular/core';
import { ObservableService } from '../providers/observable.service';
import { config } from '../shared/smartadmin.config';

@Injectable()
export class FacturaService {
  constructor(private servicio: ObservableService) { }

  public getOne(id: string) {
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.factura.buscar}/${id}`)
  }

   public deleteFactura(id: number) {
    return this.servicio.getUrlServicioDelete(`${config.APIRest.url}${config.APIRest.factura.base}/${id}`)
  }

  public insertarFactura(factura) {
    return this.servicio.getUrlServicioPost(`${config.APIRest.url}${config.APIRest.factura.add}`, factura);
  }

  public actualizarFactura(factura) {
    return this.servicio.getUrlServicioPut(`${config.APIRest.url}${config.APIRest.factura.base}`, factura);
  }

  public getAllFactura() {    
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.factura.base}`);
  }

  public getAllCanalesByEstado(estado:string) {    
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.canal.listaEstado}/${estado}`);
  }
}