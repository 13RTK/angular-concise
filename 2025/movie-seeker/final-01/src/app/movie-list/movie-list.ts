import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieCard } from './movie-card/movie-card';

@Component({
  selector: 'movie-list',
  imports: [MatGridListModule, MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {}
