import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'circle-property',
  templateUrl: './circle-property.html',
  imports: [FormsModule],
})
export class CircleProperty {
  circleProperty = model<number>();
}
