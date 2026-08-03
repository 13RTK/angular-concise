import { Component, inject, OnInit } from '@angular/core';
import { AdviceStore } from './advice-store';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Profile],
})
export class App implements OnInit {
  adviceStore = inject(AdviceStore);

  advice = this.adviceStore.advice;
  isLoading = this.adviceStore.isLoading;

  ngOnInit(): void {
    this.adviceStore.getAdvice();
  }
}
