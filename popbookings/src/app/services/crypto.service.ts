import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService {
  cryptoKey: string;
  cryptoIv: string;

  constructor() {
    this.cryptoKey = CryptoJS.enc.Base64.parse("R4YT5YLzLdBJE2Ecuz+szulZHsJ+FGKDZasicEvLjO8=");
    this.cryptoIv = CryptoJS.enc.Base64.parse("IWFvbR1NouI693AnbARpgg==");
  }

  encrypt(plainText) {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), this.cryptoKey, {
      keySize: 128 / 8,
      iv: this.cryptoIv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
  }

  decrypt(ciphertext) {
    return CryptoJS.AES.decrypt(ciphertext, this.cryptoKey, {
        keySize: 128 / 8,
        iv: this.cryptoIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
  }

}
