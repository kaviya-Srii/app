import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pass',
  standalone: true,
  imports: [],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.css',
})
export class PassComponent implements OnInit {

  // constructor(private router: Router) {}

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
  correctAnswers!: number;
  wrongAnswers!: number;
  totalQuestions!: number;

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: string | number }) => {
      this.correctAnswers = +params['correctAnswers'];
      this.wrongAnswers = +params['wrongAnswers'];
      this.totalQuestions = +params['totalQuestions'];
    });
  }
}
