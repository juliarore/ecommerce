import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../services/user/user';
import { UserStore } from '../../../services/user-store/user-store';
import { ActivatedRoute, Router } from '@angular/router';
import {UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: User,
    private userStore: UserStore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Si l'usuari ja està autenticat, redirigim a la pàgina d'articles
    if (this.userStore.isUserAuthenticated()) {
      this.router.navigate(['/articles/list']);
    }
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      const loginData: UserModel = this.loginForm.value;

      // Cridem al servei User per iniciar sessió
      this.userService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // Guardem el token utilitzant UserStore
          this.userStore.saveToken(response.token);
          this.successMessage = 'Has iniciado sesión correctamente.';
          this.errorMessage = '';

          // Obtenim la ruta original a la qual l'usuari volia accedir
          const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/articles/list';
          // Redirigim a la pàgina d'articles després s'un breu delay per permetre veure el missatge
          setTimeout(() => this.router.navigate([redirectUrl]), 1500);
        },
        error: () => {
          this.errorMessage = 'No se ha podido iniciar sesión. Por favor, verifica tus credenciales.';
          this.successMessage = '';
          this.formSubmitted = false;
        },
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
