import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerrosRoutingModule } from './perros-routing.module';
import { PerroListComponent } from './perro-list/perro-list.component';
import { PerroDetailComponent } from './perro-detail/perro-detail.component';


@NgModule({
  declarations: [PerroListComponent, PerroDetailComponent],
  imports: [
    CommonModule,
    PerrosRoutingModule
  ]
})
export class PerrosModule { }
