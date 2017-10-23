import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { SmartadminModule } from "app/shared/smartadmin.module";
import { TipoComponent } from './tipo/tipo.component';
import { categoriaRouting } from "app/categoria/categoria.routing";
import { ListaComponent } from './lista/lista.component';

@NgModule({
  
  imports: [
    categoriaRouting,
    CommonModule,
    SmartadminModule
  ],
  declarations: [CategoriaComponent, TipoComponent, ListaComponent]
})
export class CategoriaModule { }
