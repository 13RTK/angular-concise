import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello From Angular</h1>
    <input (input)="handleInput()" type="text" />
    <p>{{ inputText() }}</p>
  `,
  styleUrl: './app.css',
})
export class App {
  inputText = signal('');

  handleInput(event: Event) {}
}
