import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-5',
  standalone: true,
  imports: [],
  templateUrl: './courses-5.component.html',
  styleUrl: './courses-5.component.css',
})
export class Courses5Component {
  constructor(private router: Router) {}

  handleSearchClick() {

  }
  handleSettingCLick() {
    this.router.navigate(['settings']);
  }
  handleProfileCLick() {
    this.router.navigate(['profile']);
  }
  handleMcqCLick() {
    this.router.navigate(['mcq']);
  }
  handleVideosCLick() {
    this.router.navigate(['videos']);
  }
  handleCoursesCLick() {
    this.router.navigate(['courses']);
  }
  handleHomeCLick() {
    this.router.navigate(['dashboard']);
  }
}
