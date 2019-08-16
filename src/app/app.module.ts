import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { CreateCategoriaComponent } from './categoria/create-categoria/create-categoria.component';
import { CreateProduttoreComponent } from './produttore/create-produttore/create-produttore.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CategoriaDetailsComponent } from './categoria/categoria-details/categoria-details.component';
import { ProduttoreDetailsComponent } from './produttore/produttore-details/produttore-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { ProduttoreListComponent } from './produttore/produttore-list/produttore-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-http-intercept.service';


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
    ProduttoreListComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true} ],
  bootstrap: [AppComponent]

})
export class AppModule { }
