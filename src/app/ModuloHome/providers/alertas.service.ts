import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { config } from '../shared/smartadmin.config';

declare var $:any;

@Injectable()
export class AlertasService {

  private static alertTime = config.alertTimeOut; 

  constructor() { }

  public mostrarAlertaErrorObservable(err:any)
  {
    console.error("Error del sistema en (HTTP)", err);
    let content;
    if(err._body && typeof(err._body) == 'string'){
      let errores = JSON.parse(err._body);
      if(errores.length)
        for(let index in errores)
        {
          let e = errores[index];
          content = (e.mensaje || 'Errores desconocido.') + "<br>Ejecutando: " + (e.accionEjecutada || 'desconocida');
          this.mostrarAlertaError("Error del sistema.", content, err);
        }
      else{
        content = ( errores.mensaje || 'Error desconocido.') 
        + "<br>Ejecutando: " + (errores.accionEjecutada || 'desconocida');
        this.mostrarAlertaError("Error del sistema.", content, err);
      }
    }else
    {
       this.mostrarAlertaError("Error del sistema.", `Error en el servidor ${err.statusText}(${err.status}).`, err);
    }
    return Observable.throw(err || 'Error desconocidon la respuesta del servidor.')
  }

  public mostrarAlertaError(titulo:string, mensaje:string, err:any)
  {
    console.error("Error del sistema", err);
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#c26565",
      icon: "fa fa-times bounce animated",
      timeout: AlertasService.alertTime
    });
  }

  public mostrarAlertaInfo(titulo:string, mensaje:string)
  {
    $.smallBox({
      title: titulo,
      content: mensaje,
      color: "#3276b1",
      icon: "fa fa-bell bounce animated",
      timeout: AlertasService.alertTime
    });
  }
  public mostrarAlertaInfoGeneric()
  {
    $.smallBox({
      title: "Mensaje del sistema.",
      content: "Acción completada correctamente.",
      color: "#3276b1",
      icon: "fa fa-bell bounce animated",
      timeout: AlertasService.alertTime
    });
  }
}
