import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../services/user/user';
import { Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';

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
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private userService: User, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.registerForm.valid) {
      const registerData: UserModel = this.registerForm.value;

      this.userService.register(registerData).subscribe({
        next: () => {
          this.successMessage = 'Te has registrado con éxito. Ahora puedes iniciar sesión.';
          this.errorMessage = '';
          this.registerForm.reset();
          this.formSubmitted = false;
          setTimeout(() => this.router.navigate(['/login']), 1500);
        },
        error: () => {
          this.errorMessage = 'No se ha podido hacer el registro. Por favor, inténtalo de nuevo.';
          this.successMessage = '';
          this.formSubmitted = false;
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
