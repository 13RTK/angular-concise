import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  inputText = '';

  handleInputChange(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;
  }
}
