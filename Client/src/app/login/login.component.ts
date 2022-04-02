import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
// import { Form } from '../form';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Form } from '../model/Form';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  form: Form;
  message= "User has logged in";
  resp:any;

  constructor(private service:FormServiceService, private router:Router) { }
  
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username:new FormControl(''),
      email: new FormControl(''),
      password:new FormControl(''),
      address: new FormControl('')
    })
  }

  getData(){
    console.log(this.loginForm.value);
    this.service.getData(this.loginForm.value).subscribe(response => {},
     resp => {
      if(resp.error == this.message) {
        this.router.navigateByUrl('/survey')   
      }
      else{
        alert(resp.error) 
      }
      
      }
    
    )
  }


}
