import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthenticationService} from "../shared/services/authentication.service";
import {catchError, map} from "rxjs/operators";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser:any = this.authenticationService.currentUserValue;

    if (currentUser) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }

    return next.handle(req)
      .pipe(catchError((err) => {
        if (err.status === 401) {
          const currentUser = this.authenticationService.currentUserValue;

          if (this.isTokenExpired(currentUser)) {
            this.authenticationService.logout();
            this.router.navigate(['/login'], { queryParams: { returnUrl: '/consulta-venda' } });
          }
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }))
      .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        return evt;
      }));
  }

  isTokenExpired(token) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
