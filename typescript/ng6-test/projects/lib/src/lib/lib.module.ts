import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
  ],
  declarations: [LibComponent, HelloComponent],
  exports: [LibComponent, HelloComponent]
})
export class LibModule { }
