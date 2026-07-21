import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

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

      @if (loginForm.username().invalid()) {
        <p>
          {{
            loginForm
              .username()
              .errors()
              .map((error) => error.message)
              .join(' ')
          }}
        </p>
      }
      <br />
      <br />

      <input type="password" [formField]="loginForm.password" />
      @if (loginForm.password().invalid()) {
        <p>
          {{
            loginForm
              .password()
              .errors()
              .map((error) => error.message)
              .join(' ')
          }}
        </p>
      }

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
    required(schemaPath.username, { message: 'Username is required' });
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.username, 2, {
      message: 'Username must be at least 2 characters',
    });
    minLength(schemaPath.password, 6, {
      message: 'Password must be at least 6 characters',
    });
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
