import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/shared/Components/not-found/not-found.component';

//importacion del modulo de forma asincronica (nuevo para angular 11) se resuelve una promise
const publicModule = () => import('./public/public.module').then(m => m.PublicModule);

const routes: Routes = [
  {path: '', loadChildren: publicModule},
  {path: '**', component: NotFoundComponent } //aplicar redirectto y mandar al inicio de sesion de margarita
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
