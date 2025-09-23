import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [FormsModule],
})
export class App {
  inputText = signal('');

  handleClickAdd() {
    this.todoList.update((currentTodoList) => {
      return [
        ...currentTodoList,
        {
          id: currentTodoList.length + 1,
          value: this.inputText(),
        },
      ];
    });

    this.inputText.set('');
  }

  handleClickDelete(id: number) {
    this.todoList.update((currentTodoList) => {
      return currentTodoList.filter((todo) => todo.id !== id);
    });
  }

  todoList = signal([
    { id: 1, value: 'Vue' },
    { id: 2, value: 'Angular' },
    { id: 3, value: 'React' },
    { id: 4, value: 'Nuxt' },
    { id: 5, value: 'NextJS' },
    { id: 6, value: 'Node' },
    { id: 7, value: 'NestJS' },
    { id: 8, value: 'React Native' },
    { id: 9, value: 'Electron' },
    { id: 10, value: 'Rust' },
  ]);
}
