import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environments';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(environment.apiUrl + 'users');
  }

  saveUsers(data: UserModel): Observable<any> {
    return this.http.post(environment.apiUrl + 'users', data);
  }
}
