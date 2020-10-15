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

  login(event) {
    //console.log(event)
    this.router.navigate(['/table']);
}
  ngOnInit(): void {
  }

}
