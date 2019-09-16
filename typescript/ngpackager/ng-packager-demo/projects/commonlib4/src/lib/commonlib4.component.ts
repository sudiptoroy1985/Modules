import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-commonlib4',
  template: `
    <p>
      commonlib4 works!
    </p>
    <lib-commonlib3></lib-commonlib3>
  `,
  styles: []
})
export class Commonlib4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
