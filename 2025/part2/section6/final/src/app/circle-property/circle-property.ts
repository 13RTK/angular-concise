import { Component, model } from '@angular/core';

@Component({
  selector: 'circle-property',
  templateUrl: './circle-property.html',
})
export class CircleProperty {
  circleProperty = model<number>();

  handleCirclePropertyChange(event: Event) {
    this.circleProperty.set(Number((event.target as HTMLInputElement).value));
  }
}
