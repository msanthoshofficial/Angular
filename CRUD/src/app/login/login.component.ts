import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public realusername = "santhosh";
  public realpassword = '123';
  public username: any;
  public password: any;
  public approved = false;

  login(event) {
    //console.log(event)
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    if (this.username == this.realusername && this.password == this.realpassword) {
      sessionStorage.setItem('approvalState', "YES");
      this.approved = true;
      this.router.navigate(['/table']);
    }
    else {
      sessionStorage.setItem('approvalState', "NO");
      this.approved = false;
      alert("Wrong Credentials")
    }
}
  ngOnInit(): void {
    sessionStorage.setItem('approvalState', "NO");
  }

}
