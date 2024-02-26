// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   users: any[] = [];

//   constructor() { }

//   addUser(user: any) {
//     this.users.push(user);
//   }

//   getUsers() {
//     return this.users;
//   }
// }

// user-update.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];

  addUser(user: {
    fullName: string;
    phoneNumber: string;
    email: string;
    dob: Date | null;
    department: string;
  }) {
    this.users.push(user);
  }
  private userAddedSubject = new Subject<void>();

  userAdded$ = this.userAddedSubject.asObservable();

  constructor() {}

  getUsers() {
    return this.users;
  }

  userAdded() {
    this.userAddedSubject.next();
  }
}
