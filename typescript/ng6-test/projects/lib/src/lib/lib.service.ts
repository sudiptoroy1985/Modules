import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor() { }

  public sayHi() {
    console.log('hi');
  }

  public sayWhat(what: string) {
    console.log(what);
  }
}
