import { Component } from '@angular/core';
import { AcademicPortal } from './academic-portal/academic-portal';

@Component({
  selector: 'app-root',
  imports: [AcademicPortal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  onLoginSubmit(credentials: { username: string; password: string }): void {
    console.log('Login submit', credentials);
  }

  onGuestAccess(): void {
    console.log('Guest access');
  }
}
