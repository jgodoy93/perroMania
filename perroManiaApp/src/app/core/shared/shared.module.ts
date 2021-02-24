import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ButtonPerroComponent } from './Components/buttonPerro/button-perro.component';


//En containers van el navbar, footer, etc
//En components van botones, modal, cards, etc

@NgModule({
  declarations: [
   HeaderComponent,
   FooterComponent,
   NotFoundComponent,
   ButtonPerroComponent,

],
  imports: [
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ButtonPerroComponent,

  ],
  bootstrap: []
})
export class SharedModule { }