import { Injectable } from '@angular/core';
import { Todo } from '../Model/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  constructor() { }

  getTodo():Todo[]{
    return this.todos;
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo){
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  LoggerTodos(){
    console.log(this.todos);
  }
}
