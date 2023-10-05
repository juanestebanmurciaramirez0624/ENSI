import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private router:Router, private errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    
    if(token){
      request = request.clone({
        setHeaders: { authorization: `Bearer ${token}` }
      })
    }
    
    return next.handle(request).pipe(
      catchError((e: HttpErrorResponse) => {
        if(e.status === 401){
          this.errorService.megError(e)
          this.router.navigate(['/index'])
        }
        return throwError( () => new Error('Error'))
      })     
        );
      }
  }


