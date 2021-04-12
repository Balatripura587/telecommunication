import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public baseURL = "http://localhost:3000/";

  public addRegistrationDetails(data:any[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<any[]>(this.baseURL + "add-user/", data);
  }

  public loginUser(data:any[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<any>(this.baseURL + "login-user/", data);
  }

  // public LogOutUser(data:any){
  //   var headers = new Headers();
  //   headers.append("Content-Type","application/json");
  //   return this.http.post<any>(this.baseURL + "logout-user/","LOGOUT")
  // }
}
