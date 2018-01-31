import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PAGES } from '../pages';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ...PAGES],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
