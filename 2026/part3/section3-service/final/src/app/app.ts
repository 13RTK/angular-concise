import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

type AdviceSlip = {
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
  advice = signal('');
  isLoading = signal(false);

  httpClient = inject(HttpClient);

  getAdvice() {
    this.isLoading.set(true);

    this.httpClient.get<AdviceSlip>('https://api.adviceslip.com/advice').subscribe((adviceSlip) => {
      this.advice.set(adviceSlip.slip.advice);
      this.isLoading.set(false);
    });
  }

  ngOnInit(): void {
    this.getAdvice();
  }
}
