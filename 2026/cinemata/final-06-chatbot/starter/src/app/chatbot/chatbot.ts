import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';

interface ChatMessage {
  from: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CdkScrollable,
  ],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css'],
})
export class ChatBot {
  messages = signal<ChatMessage[]>([]);
  isLoading = signal(false);

  draft = '';
  scrollRef = viewChild<ElementRef>('scrollContainer');

  async send(event?: Event) {
    event?.preventDefault();

    // Prevent sending while loading
    if (this.isLoading()) {
      return;
    }

    const text = this.draft.trim();
    if (!text) {
      return;
    }

    this.isLoading.set(true);

    // Add user message
    this.messages.set([...this.messages(), { from: 'user', text }]);
    this.draft = '';
    this.scrollToBottom();

    // Simulate bot response
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1000);
    });

    // Add bot message
    this.messages.set([...this.messages(), { from: 'bot', text: 'Hello' }]);
    this.scrollToBottom();

    this.isLoading.set(false);
  }

  private scrollToBottom() {
    requestAnimationFrame(() => {
      const element = this.scrollRef()?.nativeElement;
      element?.scrollTo({
        top: element.scrollHeight,
        behavior: 'smooth',
      });
    });
  }
}
