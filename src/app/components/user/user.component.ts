import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  handleProfile1Click() {
    this.route.navigate(['profile'])
  }
  handleSettingsClick() {
    this.route.navigate(['settings'])
  }
  handleProfileClick() {
    this.route.navigate(['profile'])
  }
  handleMcqClick() {
    this.route.navigate(['mcq'])
  }
  handleVideosClick() {
    this.route.navigate(['videos'])
  }
  handleCourseClick() {
    this.route.navigate(['courses'])
  }
  handleHomeClick() {
    this.route.navigate(['dashboard'])
  }
  // users: any;
  user: any;
  subscription: Subscription;
  route: any;

  constructor(
    private userService: UserService,
    private router: ActivatedRoute  ) {
    this.subscription = this.userService.userAdded$.subscribe(() => {
      this.loadUsers();
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: { [x: string]: string }) => {
      this.user = JSON.parse(params['user']);
    });
    this.loadUsers();
  }

  loadUsers() {
    this.user = this.userService.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
