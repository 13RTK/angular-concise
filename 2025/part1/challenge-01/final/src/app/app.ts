import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [FormsModule],
})
export class App {
  perspective = signal(0);
  rotateX = signal(0);
  rotateY = signal(0);
  rotateZ = signal(0);

  handleReset() {
    this.perspective.set(0);
    this.rotateX.set(0);
    this.rotateY.set(0);
    this.rotateZ.set(0);
  }

  transformStyle = computed(() => {
    return {
      transform: `perspective(${this.perspective()}px)rotateX(${this.rotateX()}deg)rotateY(${this.rotateY()}deg)rotateZ(${this.rotateZ()}deg)`,
    };
  });
}
