import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mcq-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mcq-1.component.html',
  styleUrl: './mcq-1.component.css',
})
export class Mcq1Component {

  // showResults: any;
  // selectedOptions: any;
  questions: any[] = [];
  selectedOptions: any[] = [];
  currentQuestionIndex: number = 0;
  showResults: boolean = false;

  constructor(private router: Router) {
    this.questions = [
      {
        questionText: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
      },
      {
        questionText: 'Who is the president of the United States?',
        options: [
          'Donald Trump',
          'Joe Biden',
          'Barack Obama',
          'George Washington',
        ],
        correctAnswer: 'Joe Biden',
      },
    ];
  }

  startTest() {
    this.showResults = false;
    this.selectedOptions = new Array(this.questions.length).fill(null);
    this.currentQuestionIndex = 0;
    this.router.navigate(['mcq-2'])
  }

  onNext() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResults = true;
    } else {
      // Reset selected options for the next question
      this.selectedOptions.fill(null, this.currentQuestionIndex);
    }
  }

  handleProfile1Click() {
   this.router.navigate(['profile']);
    }

  onOptionSelect(index: number, option: string) {
    this.selectedOptions[index] = option;
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
  handleCoursesCLick() {
    this.router.navigate(['courses']);
  }
  handleVideosCLick() {
    this.router.navigate(['videos']);
  }
  handleHomeCLick() {
    this.router.navigate(['dashboard']);
  }
}
