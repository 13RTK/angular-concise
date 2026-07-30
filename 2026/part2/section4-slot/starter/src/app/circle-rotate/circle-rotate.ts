import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'circle-rotate',
  imports: [FormsModule],
  templateUrl: './circle-rotate.html',
})
export class CircleRotate {
  rotate = model<number>();
}
