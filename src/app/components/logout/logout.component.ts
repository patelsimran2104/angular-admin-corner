import { LoginAdminService } from './../../services/login-admin.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginAdminService) {}

  ngOnInit() {
    //this.authentocationService.logOut();
    this.logout();
    this.router.navigate(['/login']);
  }

  public logout(): void {
    this.loginService.logout();
  }
}
