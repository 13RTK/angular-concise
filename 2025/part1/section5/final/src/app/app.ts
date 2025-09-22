import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  username = signal('');
  password = signal('');

  isUsernameValid = computed(() => {
    console.log('isUsernameValid');

    const usernameLength = this.username().trim().length;

    return usernameLength >= 1 && usernameLength <= 3 ? 'error' : '';
  });

  isPasswordValid = computed(() => {
    console.log('isPasswordValid');

    const passwordLength = this.password().trim().length;

    return passwordLength >= 1 && passwordLength <= 3 ? 'error' : '';
  });

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.username || !this.password) {
      alert('Please enter username and password');
      return;
    }

    alert(`Username: ${this.username}\nPassword: ${this.password}`);

    this.username.set('');
    this.password.set('');
  }
}
