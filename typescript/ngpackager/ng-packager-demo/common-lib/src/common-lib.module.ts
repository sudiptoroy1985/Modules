import { CommonLibComponent } from './common-lib.component';
import { NgModule } from '@angular/core';

@NgModule({
   declarations: [CommonLibComponent],
   exports: [CommonLibComponent]
})

export class CommonLibModule {}
