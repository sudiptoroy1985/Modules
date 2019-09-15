import { Component, OnInit } from '@angular/core';
import { LibService } from 'lib';

@Component({
  selector: 'lib-lib2',
  template: `
    <p>
      lib2 works!
    </p>

    <lib-hello></lib-hello>
  `,
  styles: []
})
export class Lib2Component implements OnInit {

  // constructor(private libService: LibService) { }

  ngOnInit() {
    // this.libService.sayWhat('lib2');
  }

}
