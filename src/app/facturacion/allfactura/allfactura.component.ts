import { Component, OnInit } from '@angular/core';
import { FacturaService } from "app/providers";
import { Cabecera } from "app/models";

declare var $: any;
declare var moment: any;
@Component({
  selector: 'app-allfactura',
  templateUrl: './allfactura.component.html',
  styleUrls: ['./allfactura.component.css']
})
export class AllfacturaComponent implements OnInit {
  public hora;
  public fecha;
  public cabeceras: Cabecera[];
  public cabecera: Cabecera;
  constructor(private facService: FacturaService) { }

  ngOnInit() {
    this.cabeceras = new Array<Cabecera>();
    this.cabecera = new Cabecera();
    this.lista();

  }
   public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Cabecera.getValidators()
    };
  }
  public lista() {
    this.facService.getAllFactura()
      .subscribe(response => {
        //console.log(response);
        this.cabeceras = response
      }
      );
  }
  public createFactura(valid) {
    if (!valid) return;
    this.cabecera.pruFacFecha = this.generarFechaDescarga(this.fecha, this.hora);
    console.log(Cabecera);
    this.facService.insertarFactura(this.cabecera).subscribe(dato => { this.cabecera = dato; console.log(this.cabecera); })
  }
  public setFecha(e) {
    this.fecha = e;

  }
  public setHora(e) {
    this.hora = e;

  }
  public generarFechaDescarga(fecha: string, hora: string) {
    if (fecha && hora)
      return moment(`${fecha} ${hora}`, 'DD/MM/yyyy HH:mm').toDate();
    else if (fecha)
      return moment(fecha, 'DD/MM/yyyy').toDate();
    return null;
  }



}
