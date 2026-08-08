import { Page } from '@/types/Page';
import { computed, Service, signal } from '@angular/core';

@Service()
export class CurrentPageStore {
  currentPage = signal<Page>(Page.Trending);

  isTrending = computed(() => this.currentPage() === Page.Trending);
  isSearch = computed(() => this.currentPage() === Page.Search);
  isFavorite = computed(() => this.currentPage() === Page.Favorite);

  changeCurrentPage(page: Page) {
    this.currentPage.set(page);
  }
}
