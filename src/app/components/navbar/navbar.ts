import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserStore } from '../../services/user-store/user-store';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public userStore: UserStore, private router: Router) {}

  logout(): void {
    this.userStore.logout();
    this.router.navigate(['/login']);
  }
}
