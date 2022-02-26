import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
name = "Akanksha"

imgurl = '../assets/Screenshot (290).png'

changeName(){
  this.router.navigateByUrl('/welcome')
}
}
