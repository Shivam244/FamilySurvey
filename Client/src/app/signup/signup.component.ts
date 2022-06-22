import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Form } from '../form';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  msg = "User has been registered"
  reactiveForm: FormGroup;
  

  constructor(private service:FormServiceService, private router:Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl('',Validators.required), 
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    })
  }

  save(){
    console.log(this.reactiveForm.value);
    this.service.saveData(this.reactiveForm.value).subscribe(response => {
      if(response==this.msg){
        this.router.navigateByUrl("/login")
      } else
      alert(response);    
    })
    
  }

}
