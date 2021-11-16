import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  data:any;
  editForm:FormGroup;

  constructor(private service:FormServiceService, private fb: FormBuilder ) {
    this.data = this.service.owner.rowData;
    console.log(this.data.id);

    
    this.editForm = this.fb.group({
      owner_id : [this.data.owner_id],
      hn : [this.data.hn],
      owner_name : [this.data.owner_name],
      members: this.fb.array([])     
    })

   }

   get members(): FormArray{
    return this.editForm.get('members') as FormArray;
  }

  onSubmit(){
    console.log(this.editForm.value);   
    this.service.updateSurveyData(this.editForm.value).subscribe(response => {
      if(response) alert("Data has been updated succesfully")
    })
  }

  removeMember(i:number){

  }

   

  ngOnInit(): void {
    this.data.members.forEach((member: { name: any; age: any; dob: any; gender: any; member_id: any}) => {
      this.members.push(this.fb.group({
        member_id: [member.member_id],
        name: [member.name],
        age: [member.age],
        dob: [member.dob],
        gender: [member.gender]
      }))
    });
  }

}
