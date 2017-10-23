import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {HomeComponent} from "./home.component";
import { PruebaComponent } from './prueba/prueba.component';
import { AlertasService, ObservableService,ProductoService ,FacturaService,DetalleService} from '../providers';
import { Modulo1Component } from './modulo1/modulo1.component';
import { FacturaproductoComponent } from './facturaproducto/facturaproducto.component';
import { FacturaencabezadoComponent } from './facturaencabezado/facturaencabezado.component';
import { FacturadetalleComponent } from './facturadetalle/facturadetalle.component';
import { FacturacionComponent } from './facturacion/facturacion.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SmartadminModule,
  ],
  declarations: [HomeComponent, PruebaComponent, Modulo1Component, FacturaproductoComponent, FacturaencabezadoComponent, FacturadetalleComponent, FacturacionComponent],
  providers:[AlertasService, ObservableService,ProductoService,FacturaService,DetalleService]
})
export class HomeModule { }
