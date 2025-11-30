import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Output() routeChange = new EventEmitter<string>();

  activeRoute: string = 'articulos';

  setActiveRoute(route: string): void {
    this.activeRoute = route;
    this.routeChange.emit(route);
  }
}
