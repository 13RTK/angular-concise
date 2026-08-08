import { MovieListItem } from '@/app/movie-list/movie-list-item/movie-list-item';
import { environment } from '@/environments/environment';
import { Movie, MovieResult } from '@/types/Movie';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MovieListItem,
    Spinner,
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTitle = signal('');
  searchMovieResults = signal<Movie[]>([]);

  isLoading = signal(false);

  httpClient = inject(HttpClient);

  handleSearchMovie(event?: Event) {
    event?.preventDefault();

    this.isLoading.set(true);

    this.httpClient
      .get<MovieResult>(
        environment.tmdbAPIUrl +
          `search/movie?query=${this.searchTitle()}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            authorization: `Bearer ${environment.tmdbAPIKey}`,
          },
        },
      )
      .subscribe((data) => {
        const moviesData = data.results.map((result) => {
          return {
            id: result.id,
            title: result.title,
            overview: result.overview,
            poster: `${environment.tmdbImageBaseUrl}${result.poster_path}`,
          } as Movie;
        });

        this.searchMovieResults.set(moviesData);
        this.searchTitle.set('');
        this.isLoading.set(false);
      });
  }
}
