import { Component, inject, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieCard } from './movie-card/movie-card';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.type';
import { Spinner } from '../spinner/spinner';

type InterestsResponse = {
  categories: {
    category: string;
    interests: {
      id: string;
      name: string;
      primaryImage: {
        url: string;
        width: number;
        height: number;
      };
      description: string;
    }[];
  }[];
};

@Component({
  selector: 'movie-list',
  imports: [MatGridListModule, MovieCard, Spinner],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  movieList = signal<Movie[]>([]);

  http = inject(HttpClient);

  fetchInterests() {
    this.http.get<InterestsResponse>('https://api.imdbapi.dev/interests').subscribe((data) => {
      const randomIdx = Math.floor(Math.random() * data.categories.length);

      this.movieList.set(
        data.categories[randomIdx].interests.map((interest) => {
          return {
            ...interest,
            image: interest.primaryImage.url,
          };
        }),
      );
    });
  }

  ngOnInit() {
    this.fetchInterests();
  }
}
