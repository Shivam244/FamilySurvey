import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Form } from '../form';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  reactiveForm = new FormGroup({
    username: new FormControl('',Validators.required), 
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required)
  })

  // res:any;
  constructor(private service:FormServiceService) { }
  // data:Form = new Form();
  ngOnInit(): void {
  }

  save(){
    console.log(this.reactiveForm.value);
    this.service.saveData(this.reactiveForm.value).subscribe(response => {
      alert(response);    
    })
    
  }

}
