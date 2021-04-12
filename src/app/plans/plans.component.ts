import { Component, Input, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common'
import { Router } from '@angular/router'

import { PrepaidplansService } from '../prepaidplans.service';
import { Prepaid } from '../prepaid';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  public plans : Prepaid[] = []  ;
  constructor(private _prepaidplansservice : PrepaidplansService, private _router : Router) { 
   }

  public isOdd(elem:any){
    //(elem, this.plans[elem].amt)
    if (elem % 2 != 0){
      return true
    }else{
      return false;
    }
  }
  ngOnInit(){
    this._prepaidplansservice.showPlans().subscribe((data: Prepaid[])=>{
      data.sort((a,b)=> a.amt < b.amt ? -1 : 1);
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
