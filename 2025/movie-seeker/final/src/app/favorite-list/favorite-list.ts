import { Component, inject, signal } from '@angular/core';
import { MovieList } from '../movie-list/movie-list';
import { Movie } from '../movie-list/movie.type';
import { FavoriteMovieStorageService } from './favorite-movie-storage.service';

@Component({
  selector: 'favorite-list',
  imports: [MovieList],
  templateUrl: './favorite-list.html',
  styleUrl: './favorite-list.css',
})
export class FavoriteList {
  favoriteMovieService = inject(FavoriteMovieStorageService);

  favoriteMovieList = signal<Movie[]>(this.favoriteMovieService.getFavoriteMovies());
}
