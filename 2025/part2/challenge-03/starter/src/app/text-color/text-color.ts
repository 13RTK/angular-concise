import { Component, model } from '@angular/core';

@Component({
  selector: 'text-color',
  imports: [],
  templateUrl: './text-color.html',
})
export class TextColor {
  textColor = model<string>();

  handleTextColorChange(event: Event) {
    const newTextColor = (event.target as HTMLSelectElement).value;

    this.textColor.set(newTextColor);
  }
}
