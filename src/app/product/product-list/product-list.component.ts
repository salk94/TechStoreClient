import { MagazziniService } from './../../magazzini/magazzini.service';
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
  magazzino: Magazzino = new Magazzino();
  newProduct: Product = new Product();
  submitted = false;
  idm: number;
  edit = false;
  magazzini: Observable<Magazzino[]>;
  searchText : string;
  quantita : boolean;


  constructor(private route: ActivatedRoute, private productService: ProductService,
              private router: Router, public magazziniService: MagazziniService
              ) {}

  ngOnInit() {

    this.idm = this.route.snapshot.params['id'];
    this.magazziniService.getMagazzino(this.idm)
    .subscribe(data => {
      console.log(data)
      this.magazzino = data;
    }, error => console.log(error));
    this.reloadData();
    this.quantita = true;
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


editProduct(id:number){
  this.edit = true;
  this.productService.updateProduct(id, this.newProduct)
  .subscribe(
    data => {
      console.log(data);
      this.reloadData();

    },
    error => console.log(error));


}

ProductDetails(id: number){
  this.router.navigate(['/product', id]);
}






  productDetails(id: number){
    this.router.navigate(['/list']);
  }


}











