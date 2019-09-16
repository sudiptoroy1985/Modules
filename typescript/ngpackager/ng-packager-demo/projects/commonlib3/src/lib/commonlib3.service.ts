import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Commonlib3Service {

  constructor() {}

  getMessage = () => 'lib 3 from service watched 1';
}
