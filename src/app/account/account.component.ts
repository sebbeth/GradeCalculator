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
    this.getFromDB();
  }


  getAccount(): void {
    this.accountData.getAccount()
        .subscribe(account => this.account = account);
  }









// db test

// Currently disabled,
constructAccount(jsonObject): Account {

  var account: Account = {
    username: jsonObject['username'],
    fullname: jsonObject['fullname'],
    unitsCompleted: jsonObject['unitsCompleted'],
    GPA: jsonObject['GPA'],
    program: jsonObject['program'],
    email: jsonObject['email'],
    institutionName: jsonObject['institutionName'],
    courses: null

  };

  return account;

}


// Currently disabled,
getFromDB(): void {

    this.http.get<Account>('http://localhost:80/GradeCalculatorAPI/account/?user=seb').subscribe(data => {
      //this.apiAccount = data;
       this.account = this.constructAccount(data);
    });
}



}
