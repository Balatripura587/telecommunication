import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService : AuthService, private _router: Router){}
  ngOnInit() {
  }
  public submitForRegis(data:any[]){
    this._authService.addRegistrationDetails(data).subscribe(datax=>{
      this._router.navigateByUrl("/login").then(()=>{
        this._router.navigate(["/login"]);
      });
    })
  }
}
