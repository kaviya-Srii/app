import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fail',
  standalone: true,
  imports: [],
  templateUrl: './fail.component.html',
  styleUrl: './fail.component.css'
})
export class FailComponent implements OnInit {
  correctAnswers!: number;
  wrongAnswers!: number;
  totalQuestions!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.correctAnswers = +params['correctAnswers'];
      this.wrongAnswers = +params['wrongAnswers'];
      this.totalQuestions = +params['totalQuestions'];
    });
  }

}
