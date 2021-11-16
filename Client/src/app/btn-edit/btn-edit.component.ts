import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.scss']
})
export class BtnEditComponent implements ICellRendererAngularComp {

  params: any;

  constructor(private service:FormServiceService) { }

  refresh(params: any): boolean {
    return true;
  }
  agInit(params: any): void {
    this.params = params;
  }

  onClick($event: any){
    if(this.params.onClick instanceof Function){
      const params = {
        event : $event,
        rowData: this.params.node.data
      }
      this.params.onClick(params);
    }
    
  }

  ngOnInit(): void {
  }

}
