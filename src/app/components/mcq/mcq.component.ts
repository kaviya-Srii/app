import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcq',
  standalone: true,
  imports: [],
  templateUrl: './mcq.component.html',
  styleUrl: './mcq.component.css',
})
export class McqComponent {
  handleProfile1Click() {
    this.router.navigate(['profile']);
  }

  constructor(private router: Router) {}

  handleArrow4CLick() {
    this.router.navigate(['mcq-1']);
  }
  handleArrow3CLick() {
    this.router.navigate(['mcq-1']);
  }
  handleArrow2CLick() {
    this.router.navigate(['mcq-1']);
  }
  handleArrow1CLick() {
    this.router.navigate(['mcq-1']);
  }
  handleArrowCLick() {
    this.router.navigate(['mcq-1']);
  }
  handleSettingsCLick() {}
  handleProfileCLick() {
    this.router.navigate(['profile']);
  }
  handleMcqCLick() {
    this.router.navigate(['mcq-1']);
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
