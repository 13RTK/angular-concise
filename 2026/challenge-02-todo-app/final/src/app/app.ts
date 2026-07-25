import { Component, computed, signal } from '@angular/core';

/*
 * Goal:
 * 1. Create signals and bind them to the template
 * 2. Render the list with @for + track, and an @empty placeholder
 * 3. Implement add / remove / toggle
 */

/*
 * @name Todo App Challenge
 * @version 2.0
 * @author HDAlex_John
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  todoInput = signal('');

  todos = signal<
    {
      id: number;
      content: string;
      isCompleted: boolean;
    }[]
  >([]);

  competedTodos = computed(() =>
    this.todos().sort((o1, o2) => {
      if (o1.isCompleted !== o2.isCompleted) {
        return o1.isCompleted ? 1 : -1;
      }

      return o1.id - o2.id;
    }),
  );

  handleAddTodo() {
    this.todos.set([
      ...this.todos(),
      { id: Date.now(), content: this.todoInput(), isCompleted: false },
    ]);

    this.todoInput.set('');
  }

  handleToggleTodo(id: number) {
    this.todos.set(
      this.todos().map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      }),
    );
  }

  handleRemoveTodo(id: number) {
    this.todos.set(
      this.todos().filter((todo) => {
        if (todo.id === id) {
          return false;
        }

        return true;
      }),
    );
  }
}
