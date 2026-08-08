import { Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '@/types/Movie';
import { FavoriteMovieStore } from '@/app/favorite-movie-store';

@Component({
  selector: 'movie-list-item',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.css',
})
export class MovieListItem {
  movie = input.required<Movie>();

  favoriteMovieStore = inject(FavoriteMovieStore);

  isFavoriteMovie = computed(() => this.favoriteMovieStore.isFavoriteMovie(this.movie().id));

  toggleFavoriteMovie() {
    if (this.isFavoriteMovie()) {
      this.favoriteMovieStore.removeFavoriteMovie(this.movie().id);
      return;
    }

    this.favoriteMovieStore.addFavoriteMovie(this.movie());
  }
}
