import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


@NgModule({
  declarations: [
   HeaderComponent,
   FooterComponent,
   NotFoundComponent 
],
  imports: [
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: []
})
export class SharedModule { }