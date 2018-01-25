import {CourseItem} from './course-item';

export class Course {

id: number;
title: string;
currentPercent: number;
currentGrade: string
percentMarked: number;
finished: boolean;
courseItems: CourseItem[];

}
