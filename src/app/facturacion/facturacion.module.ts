import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionComponent } from './facturacion.component';
import { SmartadminModule } from "app/shared/smartadmin.module";
import { facturacionRouting } from "app/facturacion/facturacion.routing";
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AllfacturaComponent } from './allfactura/allfactura.component';
import { FacturaService, ObservableService, AlertasService, DetalleService,ProductoService } from "app/providers";
import { DetallememoriaComponent } from './detallememoria/detallememoria.component';

@NgModule({
  imports: [
    facturacionRouting,
    CommonModule,
    SmartadminModule
  ],
  declarations: [FacturacionComponent, CabeceraComponent, DetalleComponent, AllfacturaComponent, DetallememoriaComponent],
  providers:[AlertasService,FacturaService,ObservableService,DetalleService,ProductoService]
})
export class FacturacionModule { }
