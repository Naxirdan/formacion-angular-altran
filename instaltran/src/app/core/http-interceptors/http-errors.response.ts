import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class HttpErrorsResponseInterceptor implements HttpInterceptor {

  constructor(private toastService: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req.clone())
      .pipe(
        catchError((event) => {
          if (event instanceof HttpErrorResponse) {
            return this.handleError(event)
          }
        })
      )
  }

  private handleError(error: HttpErrorResponse): any {

    switch (error.status) {
      case 400:
        this.toastService.warning(error.message, error.statusText, { progressBar: true, closeButton: true, progressAnimation: "decreasing" })
        return throwError(error)
      case 401:
        console.error('Unauthorized', error)
        this.toastService.warning('Su sesión ha caducado!')
        return throwError(error)
      case 403:
        console.error('Forbidden', error);
        this.toastService.warning('Operación no permitida!');
        return throwError(error);
      case 409:
        this.toastService.info();
        console.log('Bad request', error);
        return throwError(error);
      case 500 || 405:
        console.error('An error occurred', error);
        this.toastService.error('Ocurrió un error!');
        return throwError(error);
      default:
        return throwError(error)
    }

  }
}
