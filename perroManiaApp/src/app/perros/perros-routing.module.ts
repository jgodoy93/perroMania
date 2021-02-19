import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerroListComponent } from './perro-list/perro-list.component';

const routes: Routes = [
  {
    path: '',
    component: PerroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerrosRoutingModule { }
