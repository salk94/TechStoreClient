import { CreateProductComponent } from './product/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';


const routes: Routes = [
  { path: 'add', component: CreateProductComponent},
  { path: 'list', component: ProductListComponent}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
