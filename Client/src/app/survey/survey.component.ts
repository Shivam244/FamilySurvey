import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormsModule} from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { Survey } from '../survey';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  
})
export class SurveyComponent implements OnInit {
  survey:any =  FormGroup;
  count = 0;
  validater= true;
  verify = false;
  data:any; //{hn, owner_name, owner_id}
  
  constructor(private formBuilder: FormBuilder, private service: FormServiceService){
    this.data = this.service.owner;
    this.verify = this.service.verify;
  }

  get members(): FormArray{
    return this.survey.get('members') as FormArray;
  }

   addMember(){
     if(this.count<10){
       this.members.push(this.formBuilder.group({
        'name': new FormControl(null, Validators.required),
        'age': new FormControl(null, Validators.required),
        'dob': new FormControl(null, Validators.required),
        'gender': new FormControl(null, Validators.required)
       }))
     }
     this.count++;
   }

   removeMember(i:any){
      console.log(i);  
      this.members.removeAt(i);
      this.count--;  
   }

   onSubmit(){
     this.service.saveServayData(this.survey.value).subscribe(response=> {
       console.log(response);
       if(response) alert("Data has been saved");
       
     })
    
   }

   getMemberFromIndex(i:number) : any{
    return this.members.at(i).value;
   }


  ngOnInit(): void {  
    if(this.verify){
      this.survey = this.formBuilder.group({
        owner_id : [this.data.owner_id],
        hn : [this.data.hn],
        owner_name : [this.data.owner_name],
        members: this.formBuilder.array([])     
      })

      this.data.members.forEach((member: { name: any; age: any; dob: any; gender: any; member_id: any}) => {
        this.members.push(this.formBuilder.group({
          member_id: [member.member_id],
          name: [member.name],
          age: [member.age],
          dob: [member.dob],
          gender: [member.gender]
        }))
      });

    } else{
      this.survey = this.formBuilder.group({
        'id' : new FormControl(null),
        'hn' : new FormControl(null, Validators.required),
        'owner_name': new FormControl(null,Validators.required),
        'members': new FormArray([],)
      });
    }
    

  }
  

}
