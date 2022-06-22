import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  userData = new BehaviorSubject<any>([]);
  data;
  constructor() { }

  setUserData(userData :any){
    this.userData.next(userData)
  }

  getUserData(){
    return this.userData.asObservable();
  }


}
