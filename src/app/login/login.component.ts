import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router:Router) { }


  loginForm = new FormGroup({
    user: new FormControl(
      'Cognizant',
      Validators.required

    ),
    password: new FormControl('Hello123',
      Validators.required
    )
  })


  ngOnInit(): void {
  }

  loginUser() :void {
    let userName = this.loginForm.get('user')?.value
    let password = this.loginForm.get('password')?.value
    
    if ((userName == "Cognizant" && password == "Hello123")) {
      console.log("SuccessFull")
      console.log(userName + "   " + password);
      this.router.navigateByUrl('home')
    } else {
      alert("Credentials entered are incorrect.");
      this.loginForm.get('user')?.reset("")
      this.loginForm.get('password')?.reset("")
    }
   
  }
  
}
