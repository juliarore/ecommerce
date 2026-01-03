import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() routeChange = new EventEmitter<string>();

  activeRoute: string = 'articulos';

  setActiveRoute(route: string): void {
    this.activeRoute = route;
    this.routeChange.emit(route);
  }

  logout(): void {
    this.userStore.logout();
    this.router.navigate(['/login']);
  }
}
