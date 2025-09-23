import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  todoList = signal([
    'Vue',
    'React',
    'Nuxt',
    'NextJS',
    'Node',
    'NestJS',
    'React Native',
    'Electron',
    'Rust',
  ]);
}
