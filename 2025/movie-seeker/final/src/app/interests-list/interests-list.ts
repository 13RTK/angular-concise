import { Component, inject, OnInit, signal } from '@angular/core';
import { Movie } from '../movie-list/movie.type';
import { HttpClient } from '@angular/common/http';
import { MovieList } from '../movie-list/movie-list';

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
  selector: 'interests-list',
  imports: [MovieList],
  templateUrl: './interests-list.html',
  styleUrl: './interests-list.css',
})
export class InterestsList implements OnInit {
  interestsMovieList = signal<Movie[]>([]);
  isLoading = signal(false);

  http = inject(HttpClient);

  fetchInterests() {
    this.isLoading.set(true);

    this.http.get<InterestsResponse>('https://api.imdbapi.dev/interests').subscribe((data) => {
      const randomIdx = Math.floor(Math.random() * data.categories.length);

      this.interestsMovieList.set(
        data.categories[randomIdx].interests.map((interest) => {
          return {
            ...interest,
            image: interest.primaryImage.url,
          };
        }),
      );

      this.isLoading.set(false);
    });
  }

  ngOnInit() {
    this.fetchInterests();
  }
}
