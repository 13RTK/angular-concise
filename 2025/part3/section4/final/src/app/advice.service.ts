import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, finalize, map, of } from 'rxjs';

type AdviceResponse = {
  slip: {
    id: number;
    advice: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  currentAdvice = signal('');
  isLoading = signal(false);

  private http = inject(HttpClient);

  handleGetAdvice() {
    this.isLoading.set(true);

    return this.http
      .get<AdviceResponse>('https://api.adviceslip.com/advice', {
        timeout: 3000,
      })
      .pipe(
        map((response) => response.slip.advice),
        catchError((error) => {
          alert(error.message);

          return of(`Error: ${error.message}`);
        }),
        finalize(() => this.isLoading.set(false)),
      );
  }

  fetchAdvice() {
    this.handleGetAdvice().subscribe((advice) => {
      this.currentAdvice.set(advice);
    });
  }
}
