import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';
import { SimrequestService} from '../../simrequest.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  panelOpenState = false;
  constructor(private _router : Router, private _simrequest : SimrequestService) { }
  public user :any
  public x :any
  public global_user :any
  public checkGlobalUser(){
    if(this.global_user[0]){
      return true
    }
    else{
      return false;
    }
  }
  ngOnInit(): void {

    this.x = localStorage.getItem('user')
    if(!this.x){
      this._router.navigateByUrl("/login").then(()=>{
        this._router.navigate(["/login"]);
      });
    }

    this.user = JSON.parse(this.x)
    let email = this.user.email;
    this._simrequest.searchCustByEmail({email}).subscribe(datax=>{
      //(datax);
      this.global_user = datax;
    })


    this.checkGlobalUser()

  }
}
