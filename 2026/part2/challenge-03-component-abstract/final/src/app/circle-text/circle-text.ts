import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'circle-text',
  imports: [FormsModule],
  templateUrl: './circle-text.html',
})
export class CircleText {
  text = model<string>();
}
