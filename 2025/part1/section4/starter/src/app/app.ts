import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  username = '';
  password = '';

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
