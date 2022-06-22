import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
// import { Form } from '../form';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Form } from '../model/Form';
import { DataSharingService } from '../service/data-sharing.service';


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

  constructor(private service:FormServiceService, private router:Router, private dataSharingService: DataSharingService) { }
  
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
    this.service.login(this.loginForm.value).subscribe(resp=> {
      if(resp) {
        this.dataSharingService.setUserData(resp);
        if(resp.role === "Admin"){
          this.router.navigateByUrl('/list')   
        } else{
          this.router.navigateByUrl('/survey') 
        }     
      }
      else{
        alert(resp.error) 
      }
      
      }
    
    )
  }


}
