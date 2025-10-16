import { Component, signal } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { MovieList } from './movie-list/movie-list';
import { MatDividerModule } from '@angular/material/divider';
import { Search } from './search/search';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Toolbar, MovieList, MatDividerModule, Search],
})
export class App {
  currentPage = signal('interests');

  handleChangePage(page: string) {
    this.currentPage.set(page);
  }
}
