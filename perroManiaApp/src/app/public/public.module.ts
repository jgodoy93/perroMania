import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
