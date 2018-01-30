import { Component, OnInit, Input } from '@angular/core';
import {Account} from '../../account';
import {Course} from '../../course';

@Component({
  selector: 'app-course-summary',
  templateUrl: './course-summary.component.html',
  styleUrls: ['./course-summary.component.css']
})
export class CourseSummaryComponent implements OnInit {

  @Input() course: Course;

  finished: boolean;

  cardCss: string;

  percentMarked: string;

  constructor() {
  this.cardCss = 'card';
 }

  ngOnInit() {
    this.cardCss = 'card';
    this.percentMarked = String(this.course.percentMarked) + '%';

    if (this.course.finished) {
      this.cardCss = 'card border-secondary mb-3';
    }
  }

}
