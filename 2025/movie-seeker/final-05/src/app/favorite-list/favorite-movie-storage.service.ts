import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { Movie } from '../movie-list/movie.type';
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

const STORAGE_KEY = 'favorite-movie-list';

@Injectable({
  providedIn: 'root',
})
export class FavoriteMovieStorageService {
  private storage = inject(BROWSER_STORAGE);

  favoriteMovieList = signal(this.getFavoriteMovies());

  isFavoriteMovie(movieId: string) {
    return this.favoriteMovieList().some((movie) => movie.id === movieId);
  }

  getFavoriteMovies(): Movie[] {
    return JSON.parse(this.storage.getItem(STORAGE_KEY) || '[]');
  }

  addFavoriteMovie(newMovie: Movie) {
    const favoriteMovies = this.getFavoriteMovies();
    favoriteMovies.push(newMovie);

    this.favoriteMovieList.update((movieList) => [...movieList, newMovie]);
    this.storage.setItem(STORAGE_KEY, JSON.stringify(favoriteMovies));
  }
}
