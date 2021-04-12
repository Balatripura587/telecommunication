import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';

import { SimrequestService } from '../simrequest.service'
import { Simrequest } from "../simrequest"
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpostpaid',
  templateUrl: './newpostpaid.component.html',
  styleUrls: ['./newpostpaid.component.css']
})
export class NewpostpaidComponent implements OnInit {

  constructor(private _simrequestservice : SimrequestService, private _router :Router) { }

  ngOnInit(): void {
  }

  public submitData(data: Simrequest[]){
    this._simrequestservice.addPostpaidRequest(data).subscribe(data1=>{
      let currentUrl = this._router.url;
      this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this._router.navigate([currentUrl]);
          //(currentUrl);
      });
    })
  }
}
