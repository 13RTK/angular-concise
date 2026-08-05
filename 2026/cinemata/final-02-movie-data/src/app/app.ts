import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { MovieList } from './movie-list/movie-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, MovieList, MatDividerModule],
})
export class App {}
