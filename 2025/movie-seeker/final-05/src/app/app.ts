import { Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { Toolbar } from './toolbar/toolbar';
import { Search } from './search/search';

import { InterestsList } from './interests-list/interests-list';
import { FavoriteList } from './favorite-list/favorite-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Toolbar, MatDividerModule, Search, InterestsList, FavoriteList],
})
export class App {
  currentPage = signal('interests');

  handleChangePage(page: string) {
    if (page === '404') {
      this.currentPage.set('interests');
      return;
    }

    this.currentPage.set(page);
  }
}
