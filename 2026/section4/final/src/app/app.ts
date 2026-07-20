import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';

interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello From Angular</h1>
    <form (submit)="handleSubmit($event)">
      <input type="text" [formField]="loginForm.username" />
      <br />
      <br />
      <input type="password" [formField]="loginForm.password" />
      <br />
      <br />

      <button [disabled]="loginForm().invalid()" type="submit">Submit</button>
    </form>
  `,
  styleUrl: './app.css',
  imports: [FormField],
})
export class App {
  loginModel = signal<LoginData>({
    username: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.username);
    required(schemaPath.password);
  });

  handleSubmit(event: Event) {
    event.preventDefault();

    alert(JSON.stringify(this.loginForm().value()));
    this.loginForm().value.set({
      username: '',
      password: '',
    });
    return;
  }
}
