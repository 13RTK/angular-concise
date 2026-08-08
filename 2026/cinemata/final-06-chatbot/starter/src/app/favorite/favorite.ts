import { FavoriteMovieStore } from '@/app/favorite-movie-store';
import { Component, inject } from '@angular/core';
import { MovieListItem } from '../movie-list/movie-list-item/movie-list-item';

@Component({
  selector: 'favorite',
  imports: [MovieListItem],
  templateUrl: './favorite.html',
  styleUrl: './favorite.css',
})
export class Favorite {
  favoriteMovieStore = inject(FavoriteMovieStore);

  favoriteMovies = this.favoriteMovieStore.favoriteMovies;
}
