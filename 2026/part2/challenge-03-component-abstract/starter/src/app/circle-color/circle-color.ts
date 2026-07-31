import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'circle-color',
  imports: [FormsModule],
  templateUrl: './circle-color.html',
})
export class CircleColor {
  color = model<string>();
}
