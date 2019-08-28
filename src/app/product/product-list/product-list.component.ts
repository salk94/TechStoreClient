import { Product } from '../product-services/Product';
import { ProductService } from '../product-services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productService: ProductService,
              private router: Router
              ) {}

  ngOnInit() {

    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductByUsername(sessionStorage.getItem('username'));
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

  productDetails(id: number){
    this.router.navigate(['/list']);
  }





}
