import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _authService : AuthService, private _router: Router){}

  ngOnInit() {
}

public submitForLogin(data:any[]){
  this._authService.loginUser(data).subscribe(datax=>{
    if(datax[0].usertype == "USER"){
      localStorage.setItem("user", JSON.stringify(datax[0])) ;
      this._router.navigateByUrl("/dashboard").then(()=>{
        this._router.navigate(["/dashboard"]);
      });
    }
    else if(datax[0].usertype == "ADMIN"){
      localStorage.setItem("user", JSON.stringify(datax[0])) ;
      this._router.navigateByUrl("/admin-dashboard").then(()=>{
        this._router.navigate(["/admin-dashboard"]);
      });
    }
    else{
      this._router.navigateByUrl("/login").then(()=>{
        this._router.navigate(["/login"]);
      });
    }
  })
}
}