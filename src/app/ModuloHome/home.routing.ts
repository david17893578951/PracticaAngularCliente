import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { PruebaComponent } from "./prueba/prueba.component";
import { Modulo1Component } from "./modulo1/modulo1.component";
import { FacturaproductoComponent } from "./facturaproducto/facturaproducto.component";
import { FacturaencabezadoComponent } from "./facturaencabezado/facturaencabezado.component";
import { FacturadetalleComponent } from "./facturadetalle/facturadetalle.component";
import { FacturacionComponent } from "./facturacion/facturacion.component";
export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            pageTitle: 'Home'
        }
    },

    {
        path: 'prueba',
        component: PruebaComponent,
        data: {
            pageTitle: 'prueba'
        }
    },
    {
        path: 'modulo1',
        component: Modulo1Component,
        data: {
            pageTitle: 'modulo1'
        }
    },
    {
        path: 'facturaproducto',
        component: FacturaproductoComponent,
        data: {
            pageTitle: 'facturaproducto'
        }
    },
    {
        path: 'facturaencabezado',
        component: FacturaencabezadoComponent,
        data: {
            pageTitle: 'facturaencabezado'
        }
    },
    {
        path: 'facturadetalle',
        component: FacturadetalleComponent,
        data: {
            pageTitle: 'facturadetalle'
        }
    },
    {
        path: 'facturadetalle/:id',
        component: FacturadetalleComponent,
        data: {
            pageTitle: 'facturadetalle'
        }
    },
    {
        path: 'facturacion',
        component: FacturacionComponent,
        data: {
            pageTitle: 'facturacion'
        }
    }

];

export const homeRouting = RouterModule.forChild(homeRoutes);

