import { Component, signal } from '@angular/core';
import { MovieList } from '../movie-list/movie-list';
import { Movie } from '../movie-list/movie.type';

@Component({
  selector: 'favorite-list',
  imports: [MovieList],
  templateUrl: './favorite-list.html',
  styleUrl: './favorite-list.css',
})
export class FavoriteList {
  favoriteMovieList = signal<Movie[]>([]);
}
