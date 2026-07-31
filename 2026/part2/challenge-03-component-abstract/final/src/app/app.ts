import { Component, signal } from '@angular/core';
import { form, max, min } from '@angular/forms/signals';
import { CircleProperty } from './circle-property/circle-property';

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
  imports: [CircleProperty],
})
export class App {
  circleModel = signal<CircleData>(circleDataInitialValue);

  circleForm = form(this.circleModel, (schemaPath) => {
    min(schemaPath.circleSize, 0);
    min(schemaPath.circleRotate, 0);
    max(schemaPath.circleRotate, 360);
  });

  handleReset() {
    this.circleForm().value.set(circleDataInitialValue);
  }
}
