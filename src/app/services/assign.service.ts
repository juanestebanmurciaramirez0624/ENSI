import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../interfaces/courses';
import { Assign } from '../interfaces/assigns';

@Injectable({
  providedIn: 'root'
})
export class AssignService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='api/assigns';
  }

  getAssign(): Observable <Assign[]>{
    return this.http.get<Assign[]>(`${this.myAppUrl}${this.myApiUrl}/consultation`)
  }
}
