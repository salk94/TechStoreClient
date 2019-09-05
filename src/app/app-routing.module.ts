import { MagazziniComponent } from './magazzini/magazzini.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

import { LoginComponent } from './login/login.component';


import { AuthGaurdService } from './service/auth-gaurd.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';





const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  { path: 'list/:id', component: ProductListComponent,canActivate:[AuthGaurdService]},
  { path: '', component: HomeComponent},
  { path: 'magazzini', component: MagazziniComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
