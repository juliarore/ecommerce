import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class User {
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}

  login(userData: UserModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userData);
  }

  register(userData: UserModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }
}
