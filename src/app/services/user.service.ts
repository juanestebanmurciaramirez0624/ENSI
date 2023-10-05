import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='api/users';
  }

  login(user: Login): Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user); 
  }

  singIn(user: User): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/register`, user);
  }

  getUser(): Observable <User[]>{

    /*const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('authorization', `Bearer ${token}`) 
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}/consultation`, {headers: headers}) */
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}/consultation`)  
  }
}
