import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';

import { Postpaid } from '../postpaid';
import { PrepaidplansService } from '../prepaidplans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postpaidplans',
  templateUrl: './postpaidplans.component.html',
  styleUrls: ['./postpaidplans.component.css']
})
export class PostpaidplansComponent implements OnInit {

  constructor(private _prepaidplansservice : PrepaidplansService, private _router : Router) { }

  public plans : Postpaid[] = []

  public isOdd(elem:any){
    //(elem, this.plans[elem].amt)
    if (elem % 2 != 0){
      return true
    }else{
      return false;
    }
  }
  ngOnInit(): void {
    this._prepaidplansservice.showPostpaidPlans().subscribe((data: Postpaid[])=>{
      data.sort((a,b)=> a.amt <= b.amt ? -1 : 1);
      this.plans = data;
    })

  }
  public showAlert(amt:any ,validity:any){

    let x = localStorage.getItem('user');
    if(!x){
      alert("First login to buy plans");
      this._router.navigateByUrl('/login', {skipLocationChange: true}).then(() => {
        this._router.navigate(['/login']);
    });
    }else{
    alert(`Recharge Successful! \nAmout : Rs. ${amt} \nValidity : ${validity} days`);
    this._router.navigateByUrl('/postpaid/plans', {skipLocationChange: true}).then(() => {
      this._router.navigate(['/postpaid/plans']);
  });
  }
  }

}
