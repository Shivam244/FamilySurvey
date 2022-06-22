import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  userData = new BehaviorSubject<any>(null);
  constructor() { }

  setUserData(userData :any){
    this.userData.next(userData)
  }

  getUserData(){
    return this.userData;
  }
}
