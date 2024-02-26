import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-1',
  standalone: true,
  imports: [],
  templateUrl: './courses-1.component.html',
  styleUrl: './courses-1.component.css',
})
export class Courses1Component {

  constructor(private router: Router) {}

  handleGroup27Click() {
    this.router.navigate(['courses-2']);
  }
  handleGroup26Click() {
    this.router.navigate(['courses-2']);
  }
  handleGroup24Click() {
    this.router.navigate(['courses-2']);
  }
  handleGroup23Click() {
    this.router.navigate(['courses-2']);
  }
  handleGroup21Click() {
    this.router.navigate(['courses-2']);
  }
  handleGroup19Click() {
    this.router.navigate(['courses-2']);
  }
  handleSearchClick() {
    this.router.navigate(['']);
  }
  handleSettingClick() {
    this.router.navigate(['settings']);
  }
  handleProfileClick() {
    this.router.navigate(['profile']);
  }
  handleMcqClick() {
    this.router.navigate(['mcq']);
  }
  handleVideoClick() {
    this.router.navigate(['video']);
  }
  handleCoursesClick() {
    this.router.navigate(['courses']);
  }
  handleHomeClick() {
    this.router.navigate(['home']);
  }
}
