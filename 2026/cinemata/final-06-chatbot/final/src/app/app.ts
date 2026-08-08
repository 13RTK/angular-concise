import { Component, inject } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { MovieList } from './movie-list/movie-list';
import { MatDividerModule } from '@angular/material/divider';
import { Search } from '@/app/search/search';
import { CurrentPageStore } from '@/app/current-page-store';
import { Favorite } from './favorite/favorite';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, MovieList, MatDividerModule, Search, Favorite],
})
export class App {
  currentPageStore = inject(CurrentPageStore);
}
