import { Component, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieCard } from './movie-card/movie-card';
import { Movie } from './movie.type';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'movie-list',
  imports: [MatGridListModule, MovieCard, Spinner],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  movieList = input<Movie[]>([]);
  isLoading = input<boolean>(false);
}
