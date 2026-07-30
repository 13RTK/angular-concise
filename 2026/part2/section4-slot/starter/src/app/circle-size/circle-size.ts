import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'circle-size',
  imports: [FormsModule],
  templateUrl: './circle-size.html',
})
export class CircleSize {
  size = model<number>();
}
