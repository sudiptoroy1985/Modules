import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibModule } from 'lib';
import { Lib2Module } from 'lib2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibModule,
    Lib2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
