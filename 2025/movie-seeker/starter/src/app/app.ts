import { Component, signal } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Toolbar],
})
export class App {}
