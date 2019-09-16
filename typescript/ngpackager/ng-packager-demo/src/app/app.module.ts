

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Commonlib4Module } from 'commonlib4';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Commonlib4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
