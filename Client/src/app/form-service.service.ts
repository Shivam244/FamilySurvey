import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from './model/Form';
import { DataSharingService } from './service/data-sharing.service';
// import { Form } from './form';
// import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  owner: any; //for owner data
  modals= [];
  verify = false;
  url = "http://localhost:8080/survey";
  // token="";
  // headers;
  constructor(private http:HttpClient, private dataSharingService: DataSharingService) { 
    // this.dataSharingService.getUserData().subscribe( res=>{
    //   this.token = res.token;
    //   this.headers = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${this.token}`
    //   })
    // })
  }

  saveData(user: any): Observable<any>{
    return this.http.post('http://localhost:8080/register', user);
  }

  login(user: any): Observable<any>{
    return this.http.post('http://localhost:8080/authenticate', user);
  }

  saveServayData(survey: any): Observable<any>{
    return this.http.post('http://localhost:8080/survey/save', survey);
  }

  updateSurveyData(survey: any): Observable<any>{
    return this.http.put('http://localhost:8080/survey/update', survey);
  }

  showData(): Observable<any>{
    return this.http.get('http://localhost:8080/survey/showData');
  }

  resetPassword(data: any): Observable<any>{
    return this.http.post('http://localhost:8080/forgot-password', data)
  }

  deleteMember(id:number): Observable<any>{
    return this.http.delete(`http://localhost:8080/survey/delete/${id}`)
  }

  //collect data from edit button
  takeOwner(data: any): Observable<any>{
    this.owner = data.rowData; 
    this.verify = true;
    return this.owner;
  }

}


