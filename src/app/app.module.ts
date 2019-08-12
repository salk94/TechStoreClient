import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { CreateProduttoreComponent } from './create-produttore/create-produttore.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { ProduttoreDetailsComponent } from './produttore-details/produttore-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { ProduttoreListComponent } from './produttore-list/produttore-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    CreateCategoriaComponent,
    CreateProduttoreComponent,
    ProductDetailsComponent,
    CategoriaDetailsComponent,
    ProduttoreDetailsComponent,
    ProductListComponent,
    CategoriaListComponent,
    ProduttoreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
