import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/shared/Components/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () =>import('./public/public.module').then(m => m.PublicModule)},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
