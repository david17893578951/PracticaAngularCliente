import { Injectable } from '@angular/core';
import { ObservableService } from '../providers/observable.service';
import { config } from '../shared/smartadmin.config';

@Injectable()
export class DetalleService {
  constructor(private servicio: ObservableService) { }

  public getOne(id: number) {
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.detalle.lista}/${id}`)
  }

   public deleteDetalle(id: number) {
    return this.servicio.getUrlServicioDelete(`${config.APIRest.url}${config.APIRest.detalle.base}/${id}`)
  }

  public insertarDetalle(detalle) {
    return this.servicio.getUrlServicioPost(`${config.APIRest.url}${config.APIRest.detalle.add}`, detalle);
  }

  public actualizarDetalle(detalle) {
    return this.servicio.getUrlServicioPut(`${config.APIRest.url}${config.APIRest.detalle.base}`, detalle);
  }

  public getAllDetalle() {    
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.detalle.base}`);
  }
  public getUnoDetalle(id: number) {    
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.detalle.lista}/${id}`)
  }

  public getAllCanalesByEstado(estado:string) {    
    return this.servicio.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.canal.listaEstado}/${estado}`);
  }
}