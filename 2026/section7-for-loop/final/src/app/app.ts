import { Component, signal } from '@angular/core';
import idols from '../data/idols.json' with { type: 'json' };

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  idols = signal(idols);
}
