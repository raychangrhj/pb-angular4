import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }
  
  contains(a: string, b:string) {
    return a.toLowerCase().replace(/\s/g, '').indexOf(b.toLowerCase().replace(/\s/g, '')) != -1;
  }

}
