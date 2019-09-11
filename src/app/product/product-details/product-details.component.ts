import { MagazziniService } from './../../magazzini/magazzini.service';
import { Magazzino } from './../../magazzini/magazzino';
import { Product } from './../product-services/Product';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product-services/product.service';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
idP: number;
product: Product= new Product();
products: Observable<Product>;
magazzini: Observable<Magazzino>;
magazzino: Magazzino;

edit = false;

  constructor(private route: ActivatedRoute,  public productService: ProductService,
    private router: Router, public magazziniService: MagazziniService) {

     }

  ngOnInit() {
    this.idP = this.route.snapshot.params['idP'];
    this.productService.getProduct(this.idP)
    .subscribe(data => {
      console.log(data)
      this.product = data;
    }, error => console.log(error));


    this.magazziniService.getMagazzino(this.product.magazzino)
    .subscribe(data => {
      console.log(data)
      this.magazzino = data;
    }, error => console.log(error));

this.reloadData();

  }

  editProduct(idP){
    this.edit = true;

    this.productService.updateProduct(idP, this.product)
    .subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
  }
  reloadData() {
    this.products = this.productService.getProduct(this.idP);
  }

  MagazzinoDetail(){
    this.router.navigate(['list', this.product.magazzino]);
  }

  getMagazzino(){

this.magazzini=this.magazziniService.getMagazzino(this.product.magazzino);

}

}
