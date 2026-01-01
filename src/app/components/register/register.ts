import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../services/user/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private userService: User) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;

      this.userService.register(username, password).subscribe({
        next: (response) => {
          console.log('Register successful:', response);
          this.registerForm.reset();
          this.formSubmitted = false;
        },
        error: (error) => {
          console.error('Register failed:', error);
        },
      });
    }
  }

  // Getters per accedir als controls del formulari
  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
