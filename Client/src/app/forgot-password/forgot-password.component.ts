import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder, private serive: FormServiceService) { }
  email="";

  resetPassword(){
    this.email = this.emailForm.value;
    this.serive.resetPassword(this.email).subscribe(res =>{
      if(res) alert("Password Changed Successfully")
      else alert("User not found")
      console.log(this.email);
      
    })
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

}
