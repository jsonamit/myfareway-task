import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() {

  }

  baseUrl() {
    return {
      baseUrl: 'http://platformapi.immdemo.net/api/v1/Shopper'
    }
  }


}
