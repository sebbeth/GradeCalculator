import { Component, OnInit, Input } from '@angular/core';
import {Account} from '../../account';
import {Course} from '../../course';

@Component({
  selector: 'app-course-summary',
  templateUrl: './course-summary.component.html',
  styleUrls: ['./course-summary.component.css']
})
export class CourseSummaryComponent implements OnInit {

  @Input()
  course: Course;

  constructor() { }

  ngOnInit() {
  }

}
