import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { CustumerSearchComponent } from './components/custumer/custumer-search/custumer-search.component';
import { CustumerRegistrationComponent } from './components/custumer/custumer-registration/custumer-registration.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'custumer',
    component: CustumerSearchComponent
  },
  {
    path:'custumerRegistration',
    component: CustumerRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
