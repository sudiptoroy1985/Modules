import { Commonlib3Service } from './commonlib3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-commonlib3',
  templateUrl: './commonlib4.component.html',
  styles: []
})
export class Commonlib3Component implements OnInit {

  public message: String = '';

  constructor(private svc: Commonlib3Service) { }

  ngOnInit() {
    this.message = this.svc.getMessage();
  }

}
