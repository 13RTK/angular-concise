import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '../movie.type';
import { FavoriteMovieStorageService } from '../../favorite-list/favorite-movie-storage.service';

@Component({
  selector: 'movie-card',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  movie = input<Movie>();

  favoriteMovieService = inject(FavoriteMovieStorageService);
  favoriteMovieList = this.favoriteMovieService.favoriteMovieList;

  isFavoriteMovie = computed(() => this.favoriteMovieService.isFavoriteMovie(this.movie()!.id));

  handleClickLike() {
    this.favoriteMovieService.addFavoriteMovie(this.movie()!);
  }
}
