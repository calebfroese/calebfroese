import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { COMPONENTS } from '../components';
import { PAGES } from '../pages';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ...PAGES, ...COMPONENTS],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
