import { Router } from '@angular/router';
import { Utils } from './utils.service';
import { Admin } from './../classes/admin';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  public adminLoggedOut: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
  public httpOptions: any = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor( private _http : HttpClient, private router: Router) {   }

  public loginAdminFromRemote(admin : Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8082/login",JSON.stringify(admin), this.httpOptions).pipe(map((data: any) => {
      if (!Utils.isNullOrUndefined(data)) {
        data.isLoggedIn = true;
        this.adminLoggedOut.next(false);
      }

      localStorage.adminInfo = JSON.stringify(data);

      return data;
    }));
  }

  public get isLoggedIn(): boolean {
    const adminInfo = Utils.isNullOrUndefined(localStorage.adminInfo) ? undefined : JSON.parse(localStorage.adminInfo);
    
    return !Utils.isNullOrUndefined(adminInfo) ? adminInfo.isLoggedIn : false;
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate([ 'login' ]);
    this.adminLoggedOut.next(true);
  }
}
