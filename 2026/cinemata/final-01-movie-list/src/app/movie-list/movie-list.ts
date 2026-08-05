import { Component } from '@angular/core';
import { MovieListItem } from './movie-list-item/movie-list-item';

@Component({
  selector: 'movie-list',
  imports: [MovieListItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {}
