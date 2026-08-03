import { Component, inject } from '@angular/core';
import { AdviceStore } from '../advice-store';

@Component({
  selector: 'profile',
  imports: [],
  templateUrl: './profile.html',
})
export class Profile {
  adviceStore = inject(AdviceStore);
}
