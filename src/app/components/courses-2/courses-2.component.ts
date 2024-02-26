import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-2',
  standalone: true,
  imports: [],
  templateUrl: './courses-2.component.html',
  styleUrl: './courses-2.component.css',
})
export class Courses2Component {
  handleSlidesClick() {
    this.router.navigate(['slides']);
  }
  handleMCQClick() {
    this.router.navigate(['mcq']);
  }
  handleEbooksClick() {
    this.router.navigate(['courses-3']);
  }

  constructor(private router: Router) {}

  handleSettingClick() {
    this.router.navigate(['settings']);
  }
  handleProfileClick() {
    this.router.navigate(['profile']);
  }
  handleMcqClick() {
    this.router.navigate(['mcq']);
  }
  handleVideosClick() {
    this.router.navigate(['video']);
  }
  handleCoursesClick() {
    this.router.navigate(['courses']);
  }
  handleHomeClick() {
    this.router.navigate(['dashboard']);
  }
  handleSearchClick() {}
}
