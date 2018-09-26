// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//     token:String="helloalith";
//   constructor() {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     request = request.clone({
//       setHeaders: {
//         userId: `1`
//       }
//     });
//     return next.handle(request);
//   }
// }



import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest,  HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';


@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        var curbody = req.body;
        if(localStorage.getItem('auth_token')==null) {
            var token:any='false';
        } else {
            var token:any=localStorage.getItem('auth_token');
        }
        let request = req.clone({
            // headers: new HttpHeaders().set('idd','1')
            setHeaders:{idd: token}
            // headers.set('authentication', `hello`);
            });
        return next.handle(request);
        // .do(
        //     (event:any)=> {},
        //     (error:any)=>{
        //         if(error instanceof HttpErrorResponse) {
        //             if(error.status == 501 ) {
        //                 console.log("this is error")
        //             }
        //         }
        //     }
        // )
        
    }
}
