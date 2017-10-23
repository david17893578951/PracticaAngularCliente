import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from "app/categoria/categoria.component";
import { TipoComponent } from "app/categoria/tipo/tipo.component";

export const categoriaRoutes: Routes = [
    {
        path: '',
        component: CategoriaComponent,
        data: {
            pageTitle: 'categoria'
        }
    },
    {
        path: 'tipo',
        component: TipoComponent,
        data: {
            pageTitle: 'tipo'
        }
    }
    
   
];

export const categoriaRouting = RouterModule.forChild(categoriaRoutes);

