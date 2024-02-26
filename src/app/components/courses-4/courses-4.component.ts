import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-4',
  standalone: true,
  imports: [],
  templateUrl: './courses-4.component.html',
  styleUrl: './courses-4.component.css',
})
export class Courses4Component {

  constructor(private router: Router) {}

  handleSettingsCLick() {
    this.router.navigate(['settings']);
  }
  handleProfileLick() {
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
  handleSearchClick() {

  }
}
