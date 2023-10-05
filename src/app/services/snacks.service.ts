import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Snack } from '../interfaces/snacks';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='api/snacks';
  }

  getSnancks(): Observable <Snack[]>{
    return this.http.get<Snack[]>(`${this.myAppUrl}${this.myApiUrl}/consultation`)
  }
}
