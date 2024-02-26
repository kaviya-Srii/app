import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }

  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.http
      .post<any>('http://192.168.29.179:3000/login', { email, password })
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['dashboard']);
        },
        (error: any) => {
          console.error('Error:', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      );
  }
}
