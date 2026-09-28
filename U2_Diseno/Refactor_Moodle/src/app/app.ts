import { Component } from '@angular/core';
import { MoodleHome } from './home/home';

@Component({
  selector: 'app-root',
  imports: [MoodleHome],
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
