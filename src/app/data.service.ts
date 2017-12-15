import { Injectable } from '@angular/core';
import { shift1, shift2 } from './data.mock';
@Injectable()
export class DataService {

  constructor() { }
  getShift2() {
    return shift2;
  }
  getShift1() {
    return shift1;
  }
}
