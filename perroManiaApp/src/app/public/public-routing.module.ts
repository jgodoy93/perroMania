import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/containers/home.component'
import { LoginComponent } from './login/containers/login.component';
import { PublicComponent } from './public.component';
import { RegistryComponent } from './registry/containers/registry.component';
import { RecoveryComponent } from './recovery/containers/recovery.component';
import { CardPerrosComponent} from './home/components/card-perros.component';

/*
  en html usar la funcion routerLink
*/

const routes: Routes = [
  { path: '', component: PublicComponent, children:
    [
      {path: '', redirectTo:'home', pathMatch: 'full'},
      {
        path: 'home'
        , component: HomeComponent, children:
        [
          {
            path: 'perros',
            component: CardPerrosComponent,
          }
        ]
      },
      {
        path: 'login', 
        component: LoginComponent,
        data: { showHeader: false , showFooter: false } 
      },
      {
        path: 'registry',
         component: RegistryComponent,
         //data: 
      },
      {
        path: 'recovery',
         component: RecoveryComponent,
         //data: 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
