import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  response : any;
  API_URL: string = 'https://jsonplaceholder.typicode.com/'
  
  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User[]>{
  	return this.http.get<User[]>(this.API_URL+'users');
  }

  getUser(userId) {
  	return this.http.get<User>(`${this.API_URL+'users'}/${userId}`);
  }

  fetch(){
  	return this.http.get(this.API_URL+'posts');
  }

  insert(post){
  	return this.http.post(this.API_URL+'posts', post);
  }

}
