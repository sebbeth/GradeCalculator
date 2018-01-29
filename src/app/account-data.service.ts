import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Course} from './course';
import {Account} from './account';
import {CourseItem} from './course-item';
import {Blerp} from './blerp';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiRootURL = 'http://localhost:80/GradeCalculatorAPI/';


/*

This class is the data source for account data.

*/

@Injectable()
export class AccountDataService {

  apiRootURL = 'http://localhost:80/GradeCalculatorAPI';


  a: CourseItem = {
    title: 'Assignment 1',
    weighting: 50,
    possibleMark: 100,
    minimumMark: 0,
    neededMark: 40,
    markRecieved: 60,
    type: 'Assignment'
  };
  b: CourseItem = {
    title: 'Final Exam',
    weighting: 50,
    possibleMark: 100,
    minimumMark: 40,
    neededMark: 40,
    markRecieved: null,
    type: 'Exam'
  };

  course1: Course = {id:0,
    title: 'Web Engineering',
    code: 'SENG2050',
    currentPercent: 0,
    currentGrade: 'Distinction',
    percentMarked:70,
    finished: false,
    courseItems:[this.a,this.b],
    courseItemsWeightingChecksum: 1
  };
  course2: Course = {id:1,
    title: 'Internet stuff',
    code: 'COMP2050',currentPercent: 0,
    currentGrade: 'High Distinction', percentMarked:40,
    finished: false,
    courseItems:null,
    courseItemsWeightingChecksum: 1
  };
  course3: Course = {id:2,
    title: 'Maths',
    code: 'MATH1110',
    currentPercent: 0,
    currentGrade: 'High Distinction',
    percentMarked:100,
    finished: true,
    courseItems:null,
    courseItemsWeightingChecksum: 1
  };



  account: Account = {
    username: 'user',
    fullname: '[MOCK] Test Student',
    unitsCompleted: 100,
    GPA: 5.1,
    email: 'test@email.com',
    program: 'Bachelor of Testing',
    institutionName: 'University of Newcastle',

  };


  courses: Course[] = [this.course1,this.course2,this.course3];



  constructor(private http: HttpClient) {
    this.getAccountFromAPI('seb');

  }



  constructAccount(jsonObject): Account {

    var account: Account = {
      username: jsonObject['username'],
      fullname: jsonObject['fullname'],
      unitsCompleted: jsonObject['unitsCompleted'],
      GPA: jsonObject['GPA'],
      program: jsonObject['program'],
      email: jsonObject['email'],
      institutionName: jsonObject['institutionName'],

    };

    this.courses = []; // Re-instantiate the courses array

    // Get courses from request
    for (let course of jsonObject['courses']) {

    console.log(course.title);

    var newCourse: Course = {
      id:0,
      title: course.title,
      code: course.code,
      currentPercent: course.currentPercent,
      currentGrade: course.currentGrade,
      percentMarked: course.percentMarked,
      finished: course.finished,
      courseItems:[this.a,this.b],
      courseItemsWeightingChecksum: 1
    };

    this.courses.push(newCourse);

  }

  return account;

}




constructCourseItems(jsonObject): void {





}


// API interface functions

/*
getAccountFromAPI
Function that performs API request and fills account object and courses array with result.
@input user, a string containing the username for user.

Post conditions:
account object and courses array re-instantiated with data from API.
*/
public getAccountFromAPI(user): void {

  this.http.get(apiRootURL + 'account/?user=' + user).subscribe(data => {
    this.account = this.constructAccount(data);
  });
}


/*
getCourseFromAPI
Function that performs API request and fills courses array with result.
@input user, a string containing the username for user.
@input code, a string containing the course code for course

Post conditions:
courses array re-instantiated with data from API.
*/
public getCourseItemsFromAPI(user,code): void {

  this.http.get(apiRootURL + 'course/?user=' + user + '&code=' + code).subscribe(data => {
    this.constructCourseItems(data);
  });
}



/*
*/
public sendAccountToAPI(user): void {


  let data = 'string';

  this.http.put(apiRootURL + 'course/?user=' + user, data,httpOptions);

}

getAccount(): Observable<Account> {
  return of(this.account);
}

getCourses(): Observable<Course[]> {

  return of(this.courses);
}

getCourseAtIndex(index): Observable<Course> {

  return of(this.courses[index]);
}



getCourseWithCode(code):Observable<Course> {
  let output: Course;

  if (this.courses != null) {
    for (let course of this.courses) {

      if (course.code == code) {
        output = course;
      }
    }
  }
  return of(output);
}


getCourseAtIndexItems(index):Observable<CourseItem[]> {

  return of(this.courses[index].courseItems);
}


addCourseItem(parentCourse): void {

  let item: CourseItem = {

    title: 'New Assessment Item',
    weighting: 0,
    possibleMark: 0,
    minimumMark: null,
    neededMark: null,
    markRecieved: null,
    type: 'Assignment'

  }

  parentCourse.courseItems.push(item);



}

deleteCourseItem(item,course): void {
  // Pop the item from the courseItems array
  var index = course.courseItems.indexOf(item, 0);
  if (index > -1) {
    course.courseItems.splice(index, 1);
  }
}

copyCourseItem(item,course): void {

  let newItem: CourseItem = {

    title: item.title,
    weighting: item.weighting,
    possibleMark: item.possibleMark,
    minimumMark: item.minimumMark,
    neededMark: null, // Note, this is not copied.
    markRecieved: null, // Note, this is not copied.
    type: 'Assignment'
  }

  course.courseItems.push(newItem);

  course.courseItems.sort(this.courseItemComparison);

}


/*
update()
A function that, when called, recalculates all derived data values.
This is where grades are calculated.
*/
update() {

  if (this.courses != null ) {
    for (let course of this.courses) {

      let totalWeightedResults = 0;
      let courseItemWeightingSum = 0;
      let percentMarkedCounter = 0; // TODO this is not quite working

      for (let courseItem of course.courseItems) {

        if (courseItem.markRecieved != null) {
          // calculate the new course grade.
          totalWeightedResults += (courseItem.markRecieved / courseItem.possibleMark) * courseItem.weighting;
          percentMarkedCounter += Number(courseItem.weighting);
        }
        // calculate new weighting checksum
        courseItemWeightingSum += Number(courseItem.weighting);

      }
      // set new course grade
      course.currentPercent = totalWeightedResults ;

      // set new weighting Checksum
      course.courseItemsWeightingChecksum = courseItemWeightingSum;

      // Set percentMarked
      course.percentMarked = percentMarkedCounter;
    }
  }
}



/*
A helper function used to determine .sort()'s output
*/
courseItemComparison(a,b) {
  if (a.weighting > b.weighting) {
    return -1;
  }
  if (a.weighting < b.weighting) {
    return 1;
  }
  return 0;
}

}
