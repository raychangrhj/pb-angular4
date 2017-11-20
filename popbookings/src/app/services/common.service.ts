import { Injectable } from '@angular/core';
import { unescape } from 'querystring';

@Injectable()
export class CommonService {

  constructor() { }
  
  contains(a: string, b:string) {
    return a.toLowerCase().replace(/\s/g, '').indexOf(b.toLowerCase().replace(/\s/g, '')) != -1;
  }

  dataUriToBlob(dataUri) {
    var byteString;
    if(dataUri.split(",")[0].indexOf("base64") >= 0) {
      byteString = atob(dataUri.split(",")[1]);
    } else {
      byteString = unescape(dataUri.split(",")[1]);
    }
    var mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
    var ia = new Uint8Array(byteString.length);
    for(var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type: mimeString});
  }

}
