import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: FormServiceService) {
    this.service.verify=false;
   }

  ngOnInit(): void {
  }

}
