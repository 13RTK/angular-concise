import { Component, model } from '@angular/core';

@Component({
  selector: 'is-purple',
  templateUrl: './is-purple.html',
})
export class IsPurple {
  purpleStatus = model<boolean>();

  handleIsPurpleChange() {
    this.purpleStatus.update((isPurple) => !isPurple);
  }
}
