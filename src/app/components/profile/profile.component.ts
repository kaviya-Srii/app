// import { Component } from '@angular/core';
// import { UserService } from '../../user.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './profile.component.html',
//   styleUrl: './profile.component.css',
// })
// export class ProfileComponent {
//   onSubmit() {
//     throw new Error('Method not implemented.');
//   }
//   fullName: string = '';
//   phoneNumber: string = '';
//   email: string = '';
//   dob: Date | null = null;
//   department: string = '';

//   constructor(private userService: UserService, private router: Router) {}

//   addUser() {
//     this.userService.addUser({
//       fullName: this.fullName,
//       phoneNumber: this.phoneNumber,
//       email: this.email,
//       dob: this.dob,
//       department: this.department,
//     });
//     this.userService.userAdded();
//     // this.userService.addUser(user);
//     this.fullName = '';
//     this.phoneNumber = '';
//     this.email = '';
//     this.dob = null;
//     this.department = '';

//     this.router.navigate(['user'], {
//       queryParams: { user: JSON.stringify(this.user) },
//     });
//     console.log('Updated');
//   }
//   user(user: any): any {
//     throw new Error('Method not implemented.');
//   }
// }

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  handleProfile1Click() {
    this.router.navigate(['profile']);
  }
  handleSettingsClick() {
    this.router.navigate(['settings']);
  }
  handleProfileClick() {
    this.router.navigate(['profile']);
  }
  handleMcqClick() {
    this.router.navigate(['mcq']);
  }
  handleVideosClick() {
    this.router.navigate(['videos']);
  }
  handleCoursesClick() {
    this.router.navigate(['courses']);
  }
  handleHomeClick() {
    this.router.navigate(['dashboard']);
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  user: any = {};

  fullName: string = '';
  phoneNumber: string = '';
  email: string = '';
  dob: Date | null = null;
  department: string = '';

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    const user = {
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      dob: this.dob,
      department: this.department,
    };

    this.userService.addUser(user);
    this.userService.userAdded();

    this.fullName = '';
    this.phoneNumber = '';
    this.email = '';
    this.dob = null;
    this.department = '';

    this.router.navigate(['user'], {
      queryParams: { user: JSON.stringify(user) },
    });
    console.log('Updated');
  }
}
