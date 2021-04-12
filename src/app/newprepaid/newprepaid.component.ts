import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';

import { SimrequestService } from '../simrequest.service'
import { Simrequest } from "../simrequest"

@Component({
  selector: 'app-newprepaid',
  templateUrl: './newprepaid.component.html',
  styleUrls: ['./newprepaid.component.css']
})
export class NewprepaidComponent implements OnInit {

  constructor(private _simrequestservice : SimrequestService, private _router : Router) { }

  ngOnInit(): void {
  }

  public submitData(data: Simrequest[]){
    this._simrequestservice.addPrepaidRequest(data).subscribe(data1=>{
      let currentUrl = this._router.url;
      this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this._router.navigate([currentUrl]);
          //(currentUrl);
      });
    })
  }
}
