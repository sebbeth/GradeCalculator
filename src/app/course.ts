import {CourseItem} from './course-item';

export class Course {

id: number;
code: string;
title: string;
currentPercent: number;
currentGrade: string
percentMarked: number;
finished: boolean;
courseItems: CourseItem[];

}
