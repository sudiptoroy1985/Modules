import { NgModule } from '@angular/core';

import { Lib2Component } from './lib2.component';
import { LibModule } from 'lib';

@NgModule({
  imports: [
    LibModule
  ],
  declarations: [Lib2Component],
  exports: [Lib2Component]
})
export class Lib2Module { }
