import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "app/shared/smartadmin.module";
import { pfacturaRouting } from './pruebafactura.routing';
import { PruebaFacturaComponent } from "app/prueba-factura/prueba-factura.component";
import { CabezaComponent } from "app/prueba-factura/cabeza/cabeza.component";
import { DetalleComponent } from "app/prueba-factura/detalle/detalle.component";

@NgModule({
  imports: [
    pfacturaRouting,
    CommonModule,
    SmartadminModule
  ],
  declarations: [PruebaFacturaComponent,CabezaComponent,DetalleComponent]
})
export class PruebaFacturaModule { }
