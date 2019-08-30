import { Magazzino } from './../../magazzini/magazzino';
import { Product } from '../product-services/Product';
import { ProductService } from '../product-services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  product: Product = new Product();
  newProduct: Product = new Product();
  idm: number;
  submitted = false;


  constructor(private route: ActivatedRoute, private productService: ProductService,
              private router: Router
              ) {}

  ngOnInit() {
    this.idm = this.route.snapshot.params['id'];
    this.reloadData();
  }

  createProduct(){

    this.submitted = true;
    this.product.magazzino = this.idm;
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));

      this.product = new Product();
      this.reloadData();
 }

  reloadData() {
    this.products = this.productService.getProductByMagazzino(this.idm);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


updateProduct(id:number){
  this.submitted = true;
  this.productService.updateProduct(id, this.newProduct)
  .subscribe(
    data => {
      console.log(data);

    },
    error => console.log(error));
    this.newProduct = new Product();
    this.reloadData();
}






  productDetails(id: number){
    this.router.navigate(['/list']);
  }


}











