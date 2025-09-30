import { Component, model } from '@angular/core';

@Component({
  selector: 'circle-size',
  imports: [],
  templateUrl: './circle-size.html',
})
export class CircleSize {
  circleSize = model<number>();

  handleCircleSizeChange(event: Event) {
    this.circleSize.set(Number((event.target as HTMLInputElement).value));
  }
}
