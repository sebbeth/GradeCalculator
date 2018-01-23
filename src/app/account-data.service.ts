import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Course} from './course';
import {Account} from './account';

@Injectable()
export class AccountDataService {

  account: Account = {
    username: 'user',
    fullname: 'Test McTestFace',
    unitsCompleted: 100,
    GPA: 5.1,
    institutionName: 'University of Newcastle',
    courses: null

  };

  constructor() { }

  getAccount(): Observable<Account> {

    return of(this.account);
  }

}
