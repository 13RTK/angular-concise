import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'text-color',
  imports: [FormsModule],
  templateUrl: './text-color.html',
})
export class TextColor {
  textColor = model<string>();
}
