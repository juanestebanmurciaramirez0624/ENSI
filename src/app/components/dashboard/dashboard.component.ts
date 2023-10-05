import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/courses';
import { User } from 'src/app/interfaces/users';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listUser: User[] = [];
  listCourse: Course[] = [];

  constructor(private userService: UserService, private courseService: CourseService){}

  ngOnInit(): void {
    this.getUser();
    this.getCourse();
  }

  getUser(){
    this.userService.getUser().subscribe(data =>{
      this.listUser = data;
    })
  }

  getCourse(){
    this.courseService.getCourse().subscribe(data =>{
      this.listCourse = data;
    })
  }
}

