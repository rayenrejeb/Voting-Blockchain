import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

export interface User {
  fName: string,
  lName: string
}

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(){
    return this.http.get('http://localhost:8000/api/ba3').map((res:Response) => res.json()) ;
  }
/*
  getUser(name: string): Observable<User> {
    return this.http.get<User>('http://localhost:8000/api/Users/' + name);
  }

  insertUser(User: User): Observable<User> {
    return this.http.post<User>('http://localhost:8000/api/Users/', User);
  }

  updateUser(User: User): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/Users/' + User.name, User);
  }

  deleteUser(name: string) {
    return this.http.delete('http://localhost:8000/api/Users/' + name);
  }
  */
}