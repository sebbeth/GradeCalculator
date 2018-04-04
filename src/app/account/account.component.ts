import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from '../account';
import {NavigationComponent} from '../navigation/navigation.component';
import { AccountDataService } from '../account-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;

  usernameForDelete: string;

  constructor(private http: HttpClient, private accountData: AccountDataService,private router: Router) { }

  ngOnInit() {
    this.getAccount();
  }


  testHTTP() {
    this.accountData.updateAccountToAPI()
    .subscribe();

  }

  getAccount(): void {
    this.accountData.getAccount()
        .subscribe(account => this.account = account);
  }

  deleteAccount(): void {

    this.accountData.deleteAccount(this.account);
    this.router.navigate(['/']);
  }

  updateAccount(): void {
    console.log( this.accountData.updateAccountToAPI());
  }
}
