import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  constructor(private _http: HttpClient) {
  }

getToken() : Observable<any>{
  let url = `http://platformapi.immdemo.net/api/v1/token`;
  const headers= new HttpHeaders()
    .set('username', 'imemine@usa.com')
    .set('Password', '123456')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('ClientID', '1');
  
    let params = new HttpParams().set("grant_type",'password');
    return  this._http.post(url,params.toString() , {headers: headers });
}

  get(url: string,queryParams:any): Observable<any> {
    return this._http.get(url,queryParams);
  }

  post(url: string, body:any): Observable<any> {
    var urlStr = url;
    return this._http.post(urlStr, body);
  }



}