import { AccountService } from './Service/account.service';
import { Account } from './Service/Account';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account: Account = new Account();
  submitted = false;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  newAccount(): void{
    this.submitted = false;
    this.account = new Account();

  }

  save() {
    this.accountService.createAccount(this.account)
      .subscribe(data => console.log(data), error => console.log(error));
    this.account = new Account();

  }

  registrazione() {
    this.submitted = true;
    this.save();
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }






}
