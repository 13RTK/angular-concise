import { Component, model } from '@angular/core';

@Component({
  selector: 'circle-rotate',
  imports: [],
  templateUrl: './circle-rotate.html',
})
export class CircleRotate {
  circleRotate = model<number>();

  handleCircleRotateChange(event: Event) {
    this.circleRotate.set(Number((event.target as HTMLInputElement).value));
  }
}
