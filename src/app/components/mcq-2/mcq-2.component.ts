import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcq-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mcq-2.component.html',
  styleUrl: './mcq-2.component.css',
})
export class Mcq2Component {
  handleProfileClick() {
    this.router.navigate(['profile']);
  }
  handleProfile1Click() {
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
  questions: any[] = [];
  selectedOptions: any[] = [];
  currentQuestionIndex: number = 0;
  showResults: boolean = false;

  constructor(private router: Router,) {
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
      {
        questionText: 'lorem ipsum lorem ipsum?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
      },
      {
        questionText: 'lorem ipsum lorem ipsum?',
        options: ['E', 'F', 'G', 'H'],
        correctAnswer: 'E',
      },
      {
        questionText: 'lorem ipsum lorem ipsum?',
        options: ['I', 'J', 'K', 'L'],
        correctAnswer: 'I',
      },
    ];
  }

  onOptionSelect(index: number, option: string) {
    this.selectedOptions[index] = option;
  }

  onPrevious() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.showResults = false;
    }
  }

  onNext() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResults = true;
    } else {
      this.selectedOptions.fill(null, this.currentQuestionIndex);
    }
  }

  onSubmit() {
    const correctAnswers = this.calculateCorrectAnswers();
    const totalQuestions = this.questions.length;
    const wrongAnswers = totalQuestions - correctAnswers;

    const isPass = this.isPass(correctAnswers);

    if (isPass) {
      // this.router.navigateByUrl(`/pass/${correctAnswers}/${wrongAnswers}/${totalQuestions}`);
      this.router.navigateByUrl('pass');
    } else {
      // this.router.navigateByUrl(`/fail/${correctAnswers}/${wrongAnswers}/${totalQuestions}`);
      this.router.navigateByUrl('fail');
    }
  }

  private calculateCorrectAnswers(): number {
    let correctAnswersCount = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.selectedOptions[i] === this.questions[i].correctAnswer) {
        correctAnswersCount++;
      }
    }
    return correctAnswersCount;
  }

  private isPass(correctAnswers: number): boolean {
    const passThreshold = 1;
    const failThreshold = 2;

    if (correctAnswers >= 3) {
      return true;
    } else {
      return false;
    }
    return correctAnswers >= passThreshold;
  }
}
