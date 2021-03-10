import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { CardPerrosComponent } from './home/components/card-perros.component';
import { CardLogginComponent } from './login/components/card-loggin.component';
import { RegistryComponent } from './registry/containers/registry.component';
import { RecoveryComponent } from './recovery/containers/recovery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardRegistryComponent } from './registry/components/card-registry.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RegistrySuccessComponent } from './registry/components/registry-success/registry-success/registry-success.component';

@NgModule({
  providers: [CookieService],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    CardPerrosComponent,
    CardLogginComponent,
    RegistryComponent,
    RecoveryComponent,
    CardRegistryComponent,
    RegistrySuccessComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [PublicComponent],
})
export class PublicModule {}
