import { Component, inject, OnInit } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App implements OnInit {
  adviceService = inject(AdviceService);

  currentAdvice = this.adviceService.currentAdvice;
  isLoading = this.adviceService.isLoading;

  fetchAdvice() {
    this.adviceService.fetchAdvice();
  }

  ngOnInit() {
    this.fetchAdvice();
  }
}
