import { ENVIRONMENT_INITIALIZER, NgModule, importProvidersFrom, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingScreenComponent } from './components/shared/loading-screen/loading-screen/loading-screen.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorInterceptor } from './interceptors/loading-interceptor/loading-interceptor.interceptor';
import { CustumerSearchComponent } from './components/custumer/custumer-search/custumer-search.component';
import { CustumerRegistrationComponent } from './components/custumer/custumer-registration/custumer-registration.component';
import { HomeComponent } from './components/home/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

export function initializeDialogService() {
  return () => {
    inject(ConfirmDialogService)
  };
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    LoadingScreenComponent,
    CustumerSearchComponent,
    CustumerRegistrationComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    importProvidersFrom(MatDialogModule),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useFactory: initializeDialogService,
      deps: [MatDialog],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
