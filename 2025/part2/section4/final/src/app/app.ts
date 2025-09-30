import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsPurple } from './is-purple/is-purple';
import { TextColor } from './text-color/text-color';
import { CircleSize } from './circle-size/circle-size';
import { CircleRotate } from './circle-rotate/circle-rotate';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [FormsModule, IsPurple, TextColor, CircleSize, CircleRotate],
})
export class App {
  isPurple = signal(false);
  textColor = signal('');

  circleClasses = computed(() => {
    return `${this.isPurple() ? 'purple' : ''} ${this.textColor()}`;
  });

  circleSize = signal(150);
  circleRotate = signal(0);

  circleStyles = computed(() => {
    return {
      height: `${this.circleSize()}px`,
      width: `${this.circleSize()}px`,
      lineHeight: `${this.circleSize()}px`,
      transform: `rotate(${this.circleRotate()}deg)`,
    };
  });
}
