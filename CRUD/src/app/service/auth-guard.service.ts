import { LoginComponent } from './../login/login.component';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private logcomp: LoginComponent, private router: Router) { }

  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    // here we check if user is logged in or not
    // the authService returs user object, or
    // it returns undefined/null when user is not logged in

    // SINCE OUR 'authService.user' IS OF TYPE 'Observable'
    // WE MUST USE 'subscribe' TO GET VALUE OF 'user'
    return new Promise((resolve, reject) => {
      console.log(sessionStorage.getItem('approvalState'))
      if (sessionStorage.getItem('approvalState') == "YES") {
        return resolve(true);
      }
      else {
        this.router.navigate(['/login']);
        return resolve(false);
      }
    });
  }
}
