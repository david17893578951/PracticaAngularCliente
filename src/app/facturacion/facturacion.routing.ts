import { Routes, RouterModule } from '@angular/router';
import { FacturacionComponent } from "app/facturacion/facturacion.component";
import { CabeceraComponent } from "app/facturacion/cabecera/cabecera.component";
import { DetalleComponent } from "app/facturacion/detalle/detalle.component";
import { AllfacturaComponent } from "app/facturacion/allfactura/allfactura.component";
import { DetallememoriaComponent } from "app/facturacion/detallememoria/detallememoria.component";



export const facturacionRoutes: Routes = [
    {
        path: '',
        component: FacturacionComponent,
        data: {
            pageTitle: 'Facturacion'
        }
    },
     {
        path: 'cabecera',
        component: CabeceraComponent,
        data: {
            pageTitle: 'Cabecera'
        }
    },
    {
        path: 'cabecera/:id',
        component: CabeceraComponent,
        data: {
            pageTitle: 'Cabecera'
        }
    },
     {
        path: 'detalle',
        component: DetalleComponent,
        data: {
            pageTitle: 'Detalle'
        }
    },
     {
        path: 'allfactura',
        component: AllfacturaComponent,
        data: {
            pageTitle: 'AllFactura'
        }
    },
    {
        path: 'detallememoria',
        component: DetallememoriaComponent,
        data: {
            pageTitle: 'DetalleMemoria'
        }
    },


   
];

export const facturacionRouting = RouterModule.forChild(facturacionRoutes);

