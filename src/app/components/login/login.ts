import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../services/user/user';
import { UserStore } from '../../services/user-store/user-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  formSubmitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: User,
    private userStore: UserStore,
    private router: Router
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
          this.successMessage = 'Has iniciado sesión correctamente.';
          this.errorMessage = '';
          // Redirigim a la pàgina d'articles després s'un breu delay per permetre veure el missatge
          setTimeout(() => this.router.navigate(['/articles']), 1500);
        },
        error: () => {
          this.errorMessage = 'No se ha podido iniciar sesión. Por favor, verifica tus credenciales.';
          this.successMessage = '';
          this.formSubmitted = false;
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
