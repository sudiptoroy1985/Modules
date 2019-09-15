import { CommonLibModule } from 'common-lib';

import { CommonLib2Component } from './common-lib-2.component';
import { NgModule } from '@angular/core';



@NgModule({
   declarations: [CommonLib2Component],
   imports: [CommonLibModule],
   exports: [CommonLib2Component]
})

export class CommonLib2Module {}
