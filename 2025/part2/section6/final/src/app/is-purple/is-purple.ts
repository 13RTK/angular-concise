import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'is-purple',
  templateUrl: './is-purple.html',
  imports: [FormsModule],
})
export class IsPurple {
  purpleStatus = model<boolean>();
}
