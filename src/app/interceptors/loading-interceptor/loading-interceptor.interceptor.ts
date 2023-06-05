import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';

@Injectable()
export class LoadingInterceptorInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(private loadingService: LoadingScreenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequests ==0){
      this.loadingService.show();
    }

    this.activeRequests++;
    
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if(this.activeRequests==0){
          this.loadingService.hide();
        }
      })
    );
  }
}
