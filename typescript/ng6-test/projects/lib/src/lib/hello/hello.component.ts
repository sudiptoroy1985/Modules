import { Component, OnInit } from '@angular/core';
import { LibService } from '../lib.service';

@Component({
  selector: 'lib-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private libService: LibService) { }

  ngOnInit() {
    this.libService.sayHi();
  }

}
