import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class MagazziniService
 {

  private baseUrl = 'http://localhost:8080/magazzino';
  private baseUrl1 = 'http://localhost:8080/magazzini';

  constructor(private http: HttpClient,

    ) { }

  getMagazzino(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }


  getMagazzinoByUsername(username: string): Observable<any> {


    return this.http.get(`${this.baseUrl1}/${username}`);
  }



  createMagazzino(magazzino: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, magazzino);
  }

  updateMagazzino(id: number, value: any): Observable<Object> {

    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMagazzino(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMagazzinoList(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);
  }




}
