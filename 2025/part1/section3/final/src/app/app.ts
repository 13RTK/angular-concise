import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  username = '';
  password = '';

  handleUsernameInput(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  handlePasswordInput(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.username || !this.password) {
      alert('Please enter username and password');
      return;
    }

    alert(`Username: ${this.username}\nPassword: ${this.password}`);

    this.username = this.password = '';
  }
}
