import { Component, OnInit } from '@angular/core';
import { LibService } from './lib.service';

@Component({
  selector: 'lib-lib',
  template: `
    <lib-hello></lib-hello>
  `,
  styles: []
})
export class LibComponent implements OnInit {

  constructor(private libService: LibService) { }

  ngOnInit() {
    console.log(1);
  }

}
