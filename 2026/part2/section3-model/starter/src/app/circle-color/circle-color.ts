import { Component, input, output } from '@angular/core';

@Component({
  selector: 'circle-color',
  imports: [],
  templateUrl: './circle-color.html',
})
export class CircleColor {
  color = input<string>();

  changed = output<string>();

  handleInput(colorValue: string) {
    this.changed.emit(colorValue);
  }
}
