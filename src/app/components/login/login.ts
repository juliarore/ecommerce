import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../services/user/user';
import { UserStore } from '../../services/user-store/user-store';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: User,
    private userStore: UserStore
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Cridem al servei User per iniciar sessió
      this.userService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // Guardem el token utilitzant UserStore
          this.userStore.saveToken(response.token);
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
    }
  }

  // Getters per accedir als controls del formulari
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
