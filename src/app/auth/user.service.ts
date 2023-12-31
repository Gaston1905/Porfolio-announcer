import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  public dataUser$ = this.dataSubject.asObservable;

  constructor() {}

  setUserData(data: any) {
    this.dataSubject = data;
  }

  getNameUser() {
    return this.dataUser$;
  }
}
