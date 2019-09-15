import { Component, OnInit } from '@angular/core';
import {LibService} from 'lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private libService: LibService) { }

  ngOnInit() {
    this.libService.sayWhat('app component');
  }
}
