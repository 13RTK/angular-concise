import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'circle-property',
  imports: [FormsModule],
  templateUrl: './circle-property.html',
})
export class CircleProperty {
  property = model.required<string | number>();

  inputType = input.required<'text' | 'number' | 'color' | 'range'>();

  min = input<number>();
  max = input<number>();
}
