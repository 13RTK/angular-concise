import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  signalValue = signal('signal value');

  plainValue = 'plain value';

  async updateValues() {
    await new Promise((resolve) =>
      setTimeout(() => {
        this.signalValue.set('signal value updated');
        this.plainValue = 'plain value updated';
        resolve(true);
      }, 1000),
    );
  }

  async updateSignal() {
    await new Promise((resolve) =>
      setTimeout(() => {
        this.signalValue.set('signal value updated');
        resolve(true);
      }, 1000),
    );
  }

  async updatePlain() {
    await new Promise((resolve) =>
      setTimeout(() => {
        this.plainValue = 'plain value updated';
        resolve(true);
      }, 1000),
    );
  }
}
