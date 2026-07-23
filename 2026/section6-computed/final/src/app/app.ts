import { Component, computed, signal } from '@angular/core';
import { form, max, min, FormField } from '@angular/forms/signals';

/*
 * Goal:
 * 1. Separate the template into html file
 * 2. Create several signals, bind them with the template
 * 3. Bind the style of circle box with the signals
 * Hint: {
      width: `${this.size()}px`,
      height: `${this.size()}px`,
      backgroundColor: `${this.color()}`,
      transform: `rotate(${this.rotate()}deg)`,
    }
 * 4. Implement the reset button
 */

/*
 * @name Dynamic Circle Challenge
 * @version 2.0
 * @author HDAlex_John
 */

interface CircleData {
  circleColor: string;
  circleText: string;
  circleSize: number;
  circleRotate: number;
}

const circleDataInitialValue: CircleData = {
  circleColor: '#45d619',
  circleText: 'Hi!',
  circleSize: 150,
  circleRotate: 0,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormField],
})
export class App {
  circleModel = signal<CircleData>(circleDataInitialValue);

  circleForm = form(this.circleModel, (schemaPath) => {
    min(schemaPath.circleSize, 0);
    min(schemaPath.circleRotate, 0);
    max(schemaPath.circleRotate, 360);
  });

  circleStyle = computed(() => {
    return {
      width: `${this.circleForm.circleSize().value()}px`,
      height: `${this.circleForm.circleSize().value()}px`,
      backgroundColor: `${this.circleForm.circleColor().value()}`,
      transform: `rotate(${this.circleForm.circleRotate().value()}deg)`,
    };
  });

  handleReset() {
    this.circleForm().value.set(circleDataInitialValue);
  }
}
