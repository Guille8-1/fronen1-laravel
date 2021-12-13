import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private logInService: LoginService, private router:Router ) { }

  ngOnInit(): void {
  }
  logIn(){
    this.logInService.conectLoginLaravel(this.loginForm.value).subscribe(
      (res:any) =>{
        localStorage.setItem("token",res.access_token)
        this.router.navigate(["/admin"])
        console.log("********",res)
      },
      (error)=> {
        console.log("----", error);
        if(error.status === 401){
          alert("Not Vaild parameters!")
        }
      }
    )

  }

}
