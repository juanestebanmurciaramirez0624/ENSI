import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/courses';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  listCourse: Course[] = []

  constructor(private courseService: CourseService){}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    this.courseService.getCourse().subscribe(data =>{
      this.listCourse = data;
    })
  }
}

