import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello From Angular</h1>
    <form (submit)="handleSubmit($event)">
      <input
        type="text"
        [value]="username()"
        name="username"
        (input)="username.set($event.target.value.trim())"
      />
      <br />
      <br />
      <input
        type="password"
        [value]="password()"
        name="password"
        (input)="password.set($event.target.value.trim())"
      />
      <br />
      <br />

      <button [disabled]="username() === '' || password() === ''" type="submit">Submit</button>
    </form>
  `,
  styleUrl: './app.css',
})
export class App {
  username = signal('');
  password = signal('');

  handleSubmit(event: Event) {
    event.preventDefault();

    // Signal version
    alert(`Username: ${this.username()}\nPassword: ${this.password()}`);
    this.username.set('');
    this.password.set('');
    return;

    // Native formData version
    // const formElement = event.target as HTMLFormElement;
    // const formData = new FormData(formElement);

    // const username = formData.get('username')?.toString().trim();
    // const password = formData.get('password')?.toString().trim();

    // if (!username || !password) {
    //   alert('Please enter both username and password.');
    //   return;
    // }

    // alert(`Username: ${username}\nPassword: ${password}`);
    // formElement.reset();
    // return;
  }
}
