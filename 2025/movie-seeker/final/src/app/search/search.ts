import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Movie } from '../movie-list/movie.type';
import { MovieCard } from '../movie-list/movie-card/movie-card';

type MovieSearchResult = {
  imdbID: string;
  Title: string;
  Plot: string;
  Poster: string;
};

@Component({
  selector: 'app-search',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MovieCard],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTitle = signal('');
  isLoading = signal(false);
  resultMovie = signal<Movie | null>(null);

  http = inject(HttpClient);

  handleSearchMovie() {
    this.isLoading.set(true);
    this.resultMovie.set(null);

    this.http
      .get<MovieSearchResult>(`http://www.omdbapi.com/?apikey=cdedf2de&t=${this.searchTitle()}`)
      .subscribe((result) => {
        this.resultMovie.set({
          id: result.imdbID,
          name: result.Title,
          image: result.Poster,
          description: result.Plot,
        });

        this.searchTitle.set('');
        this.isLoading.set(false);
      });
  }
}
