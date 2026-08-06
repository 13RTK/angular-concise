import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieListItem } from './movie-list-item/movie-list-item';
import { HttpClient } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { Movie } from '@/types/Movie';
import { Spinner } from '@/app/spinner/spinner';

type MovieResult = {
  page: number;
  results: { id: number; title: string; overview: string; poster_path: string }[];
};

@Component({
  selector: 'movie-list',
  imports: [MovieListItem, Spinner],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  httpClient = inject(HttpClient);

  movies = signal<Movie[]>([]);

  ngOnInit(): void {
    this.httpClient
      .get<MovieResult>(environment.tmdbAPIUrl, {
        headers: {
          authorization: `Bearer ${environment.tmdbAPIKey}`,
        },
      })
      .subscribe((data) => {
        const moviesData = data.results.map((result) => {
          return {
            id: result.id,
            title: result.title,
            overview: result.overview,
            poster: `${environment.tmdbImageBaseUrl}${result.poster_path}`,
          } as Movie;
        });

        this.movies.set(moviesData);
      });
  }
}
