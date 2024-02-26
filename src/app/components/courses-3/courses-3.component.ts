import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-3',
  standalone: true,
  imports: [],
  templateUrl: './courses-3.component.html',
  styleUrl: './courses-3.component.css',
})
export class Courses3Component {

  constructor(private router: Router) {}

  handleRectangle4Click() {
    this.router.navigate(['courses-4']);
  }
  handleRectangle2Click() {
    this.router.navigate(['courses-4']);
  }
  handleRectangle1Click() {
    this.router.navigate(['courses-4']);
  }
  handleRectangleClick() {
    this.router.navigate(['courses-4']);
  }
  handleSearchClick() {

  }
  handleSettingsCLick() {
    this.router.navigate(['settings']);
  }
  handleProfileCLick() {
    this.router.navigate(['profile']);
  }
  handleMcqCLick() {
    this.router.navigate(['mcq']);
  }
  handleVideoCLick: any;
  handleCoursesCLick() {
    this.router.navigate(['video']);
  }
  handleHomeCLick() {
    this.router.navigate(['dashboard']);
  }
}
