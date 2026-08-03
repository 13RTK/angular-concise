import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

type AdviceSlip = {
  slip: {
    id: number;
    advice: string;
  };
};

@Service()
export class AdviceStore {
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
}
