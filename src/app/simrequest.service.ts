import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Simrequest } from "./simrequest"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SimrequestService {

  constructor(private http: HttpClient) { }
  public baseURL = "http://localhost:3000/";

  public addPrepaidRequest(data: Simrequest[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Simrequest[]>(this.baseURL + "newprepaidrequest/", data);
  }

  public showRequest(){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.get<Simrequest[]>(this.baseURL+ "admin-dashboard/")
  }

  public addPostpaidRequest(data: Simrequest[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Simrequest[]>(this.baseURL + "newpostpaidrequest/", data);
  }

  public addToActiveCustomer(data: Simrequest[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Simrequest[]>(this.baseURL + "add-to-active-customer/", data);
  }

  public deleteFromnewprepaid(datax: Simrequest[]){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<Simrequest[]>(this.baseURL + "delete-from-newprepaid/", datax);
  }

  public searchCust(data:any){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<any[]>(this.baseURL + "search-customer/",data);
  }

  public sendMailCustomer(data:any){
    return this.http.post<any[]>(this.baseURL + "mail-to-customer/",data);
  }

  public getDefaulters(){
    return this.http.get<any[]>(this.baseURL + "get-all-defaulters/");
  }

  public cancelConnFromDefaulters(data:any){
    return this.http.post<any>(this.baseURL + "cancel-def/",data);
  }

  public searchCustByEmail(dataz:any){
    //(data)
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post<any[]>(this.baseURL + "search-customer-by-email/",dataz);
  }
}
