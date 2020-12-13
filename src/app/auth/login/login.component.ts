import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogin(){

    if(this.email.length == 0) {
      alert('please enter email')
    } else if( this.password.length == 0){
      alert('please enter password')
    } else {
        this.authService
        .login(this.email, this.password)
        .subscribe(response => {
          if(response['status'] == 'success'){
            const data =response['data']

            //cache the userInfo
            sessionStorage ['token'] = data['token']
            sessionStorage ['firstName'] = data['firstName']
            sessionStorage ['lastName'] = data ['lastName']

            //goto home
            this.router.navigate(['/home'])

          } else {
            alert(response['error'])
          }
        })
      }
    }
}
