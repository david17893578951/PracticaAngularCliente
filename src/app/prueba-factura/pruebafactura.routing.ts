import { Routes, RouterModule } from '@angular/router';
import { PruebaFacturaComponent } from './prueba-factura.component'
import { CabezaComponent } from "app/prueba-factura/cabeza/cabeza.component";
import { DetalleComponent } from "app/prueba-factura/detalle/detalle.component";


export const pfacturaRoutes: Routes = [
    {
        path: '',
        component: PruebaFacturaComponent,
        data: {
            pageTitle: 'Factura'
        }
    },
    {
        path: 'cabeza',
        component: CabezaComponent,
        data: {
            pageTitle: 'Cabeza'
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
        path: 'detalle/:id',
        component: DetalleComponent,
        data: {
            pageTitle: 'Detalle'
        }
    }

   
];

export const pfacturaRouting = RouterModule.forChild(pfacturaRoutes);

