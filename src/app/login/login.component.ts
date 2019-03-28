import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import { AuthCheck } from '../AuthCheck';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public group:FormGroup
public resu;
  constructor( private builder:FormBuilder,private authcheck:AuthCheck) { }

  ngOnInit() {
     this.group=this.builder.group({
Username:[''],
PassWord:[''],
    })
  }
  submit()
  {
let username=this.group.get('Username').value
let passWord=this.group.get('PassWord').value
this.resu=this.authcheck.CheckValidation(username,passWord)
console.log(username,passWord)


  }

}
