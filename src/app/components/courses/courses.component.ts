import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {

  constructor(private router: Router) {}

  handleGroup10Click() {
    this.router.navigate(['courses-1']);
  }
  handleGroup9Click() {
    this.router.navigate(['courses-1']);
  }
  handleGroup8Click() {
    this.router.navigate(['courses-1']);
  }
  handleGroup11Click() {
    this.router.navigate(['courses-1']);
  }
  handleGroup12Click() {
    this.router.navigate(['courses-1']);
  }
  handleGroup13Click() {
    this.router.navigate(['courses-1']);
  }
  handleSearchClick() {
    throw new Error('Method not implemented.');
  }
  handleHomeClick() {
    this.router.navigate(['dashboard']);
  }
  handleVideosClick() {
    this.router.navigate(['videos']);
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
  handleCoursesClick() {
    this.router.navigate(['courses']);
  }
}
