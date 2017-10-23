/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {path: 'home', loadChildren: 'app/ModuloHome/home.module#HomeModule',data:{pageTitle: 'Home'}},
      {path: 'prueba', loadChildren: 'app/prueba-factura/prueba-factura.module#PruebaFacturaModule',data:{pageTitle: 'Prueba'}},
      {path: 'categoria', loadChildren: 'app/categoria/categoria.module#CategoriaModule',data:{pageTitle: 'Categoria'}},
      {path: 'facturacion', loadChildren: 'app/facturacion/facturacion.module#FacturacionModule',data:{pageTitle: 'Facturacion'}},
     
      //{path: 'inventarios', loadChildren: 'app/ModuloInventario/inventario.module#InventarioModule',data:{pageTitle: 'Inventarios'}},
       ]
  },

  {path: '**', redirectTo: 'home'}
//
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
