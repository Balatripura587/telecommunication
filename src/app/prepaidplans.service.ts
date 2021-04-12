import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prepaid } from './prepaid';
import { Postpaid } from "./postpaid";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrepaidplansService {

  constructor(private http: HttpClient) { }
  public baseURL = "http://localhost:3000/";

  // PREPAID WORKLOAD 
  public addPlan(data: Prepaid[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Prepaid[]>(this.baseURL + "planpost/", data);
  }

  public showPlans() : Observable<Prepaid[]>{
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.get<Prepaid[]>(this.baseURL + "prepaid/plans");
  }

  // POSTPAID WORKLOAD
  public addPostpaidPlan(data: Postpaid[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Postpaid[]>(this.baseURL + "postplanpost/", data);
  }

  public showPostpaidPlans() : Observable<Postpaid[]>{
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.get<Postpaid[]>(this.baseURL + "postpaid/plans");
  }
}

