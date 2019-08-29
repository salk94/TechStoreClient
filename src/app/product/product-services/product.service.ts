import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ProductService {

  private baseUrl = 'http://localhost:8080/products';
  private baseUrl1 = 'http://localhost:8080/salve';

  constructor(private http: HttpClient,

    ) { }

  getProduct(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }


  getProductByMagazzino(magazzino: number): Observable<any> {


    return this.http.get(`${this.baseUrl1}/${magazzino}`);
  }



  createProduct(product: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, value: any): Observable<Object> {

    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductList(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);
  }
}
