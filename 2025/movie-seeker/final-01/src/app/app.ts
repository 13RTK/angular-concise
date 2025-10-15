import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { MovieList } from './movie-list/movie-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Toolbar, MovieList, MatDividerModule],
})
export class App {}
