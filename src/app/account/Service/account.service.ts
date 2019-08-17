import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = 'http://localhost:8080/account';
  constructor(
    private http: HttpClient
  ) { }

    createAccount(account: Object): Observable<Object> {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("javainuse:password") });
      return this.http.post(`${this.baseUrl}`, account,{headers});
  }
}
