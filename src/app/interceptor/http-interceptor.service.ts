import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (localStorage.getItem('userToken')) {
            let data:any = localStorage.getItem('userToken');
            data = JSON.parse(data);
            const tokenReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${data.access_token}`,
                }
            });
            return next.handle(tokenReq).pipe(
                map((event: HttpEvent<any>) => {
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    throw(error);
                })
            );
        }
        else {
            const tokenReq = req.clone({
                setHeaders: { 'Content-Type': 'application/json' }
            });
            return next.handle(tokenReq).pipe(
                map((event: HttpEvent<any>) => {
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                   throw(error);
                })
            );
        }
    }

}
