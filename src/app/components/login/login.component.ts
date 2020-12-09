import { Admin } from './../../classes/admin';
import { LoginAdminService } from './../../services/login-admin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = new Admin();
  msg='';

  constructor(private loginService : LoginAdminService, private _router:Router) { }

  public ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      this._router.navigate([ 'home' ]);
    }
  }

  loginAdmin() {
    this.loginService.loginAdminFromRemote(this.admin).subscribe((data: any) => {
      console.log("response received", data);
      this._router.navigate(['/home']);
    }, (error: any) => {
        console.log("exception occured");
        this.msg="Bad credentials, please enter valid emailid and password";
      }
    );
  }

}
