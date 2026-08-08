import { Movie } from '@/types/Movie';
import { Service, signal } from '@angular/core';

const FAVORITE_MOVIE_KEY = 'favorite-movies';

@Service()
export class FavoriteMovieStore {
  favoriteMovies = signal<Movie[]>(this.getFavoriteMovies());

  getFavoriteMovies() {
    const favoriteMovieData = localStorage.getItem(FAVORITE_MOVIE_KEY);

    if (!favoriteMovieData) {
      localStorage.setItem(FAVORITE_MOVIE_KEY, JSON.stringify([]));
      return [];
    }

    return JSON.parse(favoriteMovieData);
  }

  addFavoriteMovie(movie: Movie) {
    // If the movie is already in the list, just return
    if (this.isFavoriteMovie(movie.id)) {
      return;
    }

    // Update signal and localstorage
    this.favoriteMovies.set([...this.favoriteMovies(), movie]);
    localStorage.setItem(FAVORITE_MOVIE_KEY, JSON.stringify(this.favoriteMovies()));
  }

  isFavoriteMovie(movieId: number) {
    return this.favoriteMovies().some((movie) => Number(movie.id) === movieId);
  }

  removeFavoriteMovie(movieId: number) {
    const filteredMovies = this.favoriteMovies().filter((movie) => Number(movieId) !== movie.id);

    localStorage.setItem(FAVORITE_MOVIE_KEY, JSON.stringify(filteredMovies));
    this.favoriteMovies.set(filteredMovies);
  }
}
