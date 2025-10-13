import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

type AdviceResponse = {
  slip: {
    id: number;
    advice: string;
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App implements OnInit {
  currentAdvice = signal('');
  isLoading = signal(false);

  http = inject(HttpClient);

  handleGetAdvice() {
    this.isLoading.set(true);

    this.http
      .get<AdviceResponse>('https://api.adviceslip.com/advice', {
        timeout: 3000,
      })
      .subscribe({
        next: (advice) => {
          this.currentAdvice.set(advice.slip.advice);
          this.isLoading.set(false);
        },
        error: (err) => {
          alert(err.message);
          this.isLoading.set(false);
        },
      });
  }

  ngOnInit() {
    this.handleGetAdvice();
  }
}
