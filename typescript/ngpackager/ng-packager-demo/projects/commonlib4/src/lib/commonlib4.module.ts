import { NgModule } from '@angular/core';
import { Commonlib4Component } from './commonlib4.component';
import { Commonlib3Module } from 'commonlib3';



@NgModule({
  declarations: [Commonlib4Component],
  imports: [
    Commonlib3Module
  ],
  exports: [Commonlib4Component]
})
export class Commonlib4Module { }
