import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { BtnEditComponent } from '../btn-edit/btn-edit.component';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColumnApi, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  frameworkComponents: any;
  MemberForm: FormGroup;
  element:any;
  @ViewChild("div") div:any;
  @ViewChild("modal") modal:any;
  @ViewChild("grid") gird:any;
  gridApi:any;
  columnApi:any;



  constructor(private service:FormServiceService, private fb: FormBuilder,  private el: ElementRef) { 
    this.frameworkComponents = { editBtn: BtnEditComponent}
    this.element = el.nativeElement;

    this.MemberForm = this.fb.group({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'dob': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required)
    })
  }

  data:any;

  columnDefs = [
    { headerName: "Id", field : "owner_id", sortable:true},
    { headerName: "House Number", field : "hn", sortable:true },
    { headerName: "Owner name", field : "owner_name", sortable:true},
    { headerName: "Members", field : "members", hide:true},
    { cellRenderer: 'editBtn', 
      cellRendererParams: {
        onClick: this.onBtnClick.bind(this),   
      }
    }
  ]

  onGridReady = (params: { api: GridApi; columnApi: ColumnApi; }) => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  

  onBtnClick(data: any){ 
    this.service.takeOwner(data);
    this.service.verify = true;
  }


  rowData = [];

  ngOnInit(): void {
    this.service.showData().subscribe(response => {
      this.rowData = response;     
    })
  }

}
