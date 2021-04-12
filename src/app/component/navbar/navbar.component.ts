import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public onCheckLocal(){
    let x = localStorage.getItem('user')
    if(x){
      var user = JSON.parse(x)
      if(user){
        return true
      }else{
        return false;
      }
    }else{
      return false;
    }
  
  }

  public LogOutUser(data:any){
      localStorage.clear();
      this._router.navigateByUrl("/login").then(()=>{
        this._router.navigate(["/login"]);
      });
  }

  public userLoggedInAndAdmin(){
    let x = localStorage.getItem('user')
    if(x){
      let user = JSON.parse(x)
      if (user.usertype == "ADMIN"){
        return true
      }else{
        return false;
      }
    }else{
      return false
    }
  }

}
