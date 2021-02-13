import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  bootstrap: [NavbarComponent]
})
export class NgbdNavCustomStyleModule {}