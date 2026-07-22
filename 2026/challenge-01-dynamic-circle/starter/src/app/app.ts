import { Component } from '@angular/core';

/*
 * Goal:
 * 1. Separate the template into html file
 * 2. Create several signals, bind them with the template
 * 3. Bind the style of circle box with the signals
 * Hint: {
      width: `${this.size()}px`,
      height: `${this.size()}px`,
      backgroundColor: `${this.color()}`,
      transform: `rotate(${this.rotate()}deg)`,
    }
 * 4. Implement the reset button
 */

/*
 * @name Dynamic Circle Challenge
 * @version 2.0
 * @author HDAlex_John
 */

@Component({
  selector: 'app-root',
  template: ` <main>
    <button>Reset</button>

    <label>
      Background color
      <input type="color" value="#45d619" />
    </label>

    <label>
      Circle Text
      <input type="text" value="Hi!" />
    </label>

    <label>
      Circle Size
      <input type="number" />
    </label>

    <label>
      Circle Rotate
      <input type="number" />
    </label>
    <div class="circle">Hi!</div>
  </main>`,
  styleUrl: './app.css',
})
export class App {}
