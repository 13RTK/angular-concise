import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  currentAdvice = signal('');
  isLoading = signal(false);

  async handleGetAdvice() {
    this.isLoading.set(true);

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    this.currentAdvice.set(data.slip.advice);

    this.isLoading.set(false);
  }
}
