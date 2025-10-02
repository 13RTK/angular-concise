import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../types/Todo';

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
          id: Date.now(),
          value: this.inputText(),
          isComplete: false,
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

  handleClickComplete(id: number) {
    this.todoList.update((currentTodoList) => {
      return currentTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: true,
          };
        }

        return todo;
      });
    });
  }

  todoList = signal<Todo[]>([
    { id: 1, value: 'Vue', isComplete: false },
    { id: 2, value: 'Angular', isComplete: false },
    { id: 3, value: 'React', isComplete: false },
    { id: 4, value: 'Nuxt', isComplete: false },
    { id: 5, value: 'NextJS', isComplete: false },
    { id: 6, value: 'Node', isComplete: false },
    { id: 7, value: 'NestJS', isComplete: false },
    { id: 8, value: 'React Native', isComplete: false },
    { id: 9, value: 'Electron', isComplete: false },
    { id: 10, value: 'Rust', isComplete: false },
  ]);
}
