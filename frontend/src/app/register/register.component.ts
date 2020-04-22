import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TokenPayload, AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }
  constructor(private auth: AuthenticationService, private router: Router) { }

  register(){
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login')
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit() {
  }

}
