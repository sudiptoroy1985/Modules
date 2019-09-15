import { CommonLibModule } from 'common-lib';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
