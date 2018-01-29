import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from '../account';
import { AccountDataService } from '../account-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;

  constructor(private http: HttpClient, private accountData: AccountDataService) { }

  ngOnInit() {
    this.getAccount();
  }


  getAccount(): void {
    this.accountData.getAccount()
        .subscribe(account => this.account = account);
  }


}
