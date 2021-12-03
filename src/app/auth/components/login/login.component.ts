import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('',Validators.required)
  });

  constructor(private logInService: LoginService) { }

  ngOnInit(): void {
  }
  logIn(){
    this.logInService.conectLoginLaravel(this.loginForm.value).subscribe(
      (res) =>{
        console.log(res)
      },
      (error)=> {
        console.log(error)
      }
    )

  }

}
