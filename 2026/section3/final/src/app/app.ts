import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello From Angular</h1>
    <input (input)="handleInput($event)" type="text" />
    <p>{{ inputText().split('').reverse().join('') }}</p>
  `,
  styleUrl: './app.css',
})
export class App {
  inputText = signal('');

  handleInput(event: Event) {
    this.inputText.set((event.target as HTMLInputElement).value);
  }
}
