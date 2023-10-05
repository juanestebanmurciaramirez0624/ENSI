import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../interfaces/courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='api/courses';
  }

  getCourse(): Observable <Course[]>{
    return this.http.get<Course[]>(`${this.myAppUrl}${this.myApiUrl}/consultation`)
  }
}
