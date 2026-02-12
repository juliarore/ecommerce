import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { registerUser, validateUser } from '../../data/users.data';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor() {}

  login(userData: UserModel): Observable<any> {
    const isValid = validateUser(userData.username, userData.password);

    if (!isValid) {
      return throwError(() => ({ msg: 'Invalid username or password' }));
    }

    // Simulamos un token JWT simple
    const token = btoa(`${userData.username}:${Date.now()}`);

    return of({
      msg: 'Successfully logged in',
      token: token
    });
  }

  register(userData: UserModel): Observable<any> {
    const success = registerUser(userData.username, userData.password);

    if (!success) {
      return throwError(() => ({ msg: 'User already exists, please login.' }));
    }

    return of({
      msg: 'Successfully created user, please login'
    });
  }
}
