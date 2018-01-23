import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Course} from './course';
import {Account} from './account';

@Injectable()
export class AccountDataService {

  course1: Course = {id:3, title: 'SENG2050',currentPercent: 0.6,currentGrade: 'credit', percentMarked:0.7};
  course2: Course = {id:3, title: 'COMP2050',currentPercent: 0.6,currentGrade: 'High Destinction', percentMarked:0.7};


  account: Account = {
    username: 'user',
    fullname: 'Test McTestFace',
    unitsCompleted: 100,
    GPA: 5.1,
    institutionName: 'University of Newcastle',
    courses: [this.course1,this.course2]

  };

  constructor() { }

  getAccount(): Observable<Account> {

    return of(this.account);
  }

  getCourses(): Observable<Course[]> {

    return of(this.account.courses);
  }

}
