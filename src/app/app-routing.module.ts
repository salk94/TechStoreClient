import { AccountComponent } from './account/account.component';

import { AuthGaurdService } from './service/auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';


const routes: Routes = [
  { path: 'add', component: CreateProductComponent,canActivate:[AuthGaurdService] },
  { path: 'list', component: ProductListComponent ,canActivate:[AuthGaurdService] },
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent},
  { path: 'registrazione', component: AccountComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
