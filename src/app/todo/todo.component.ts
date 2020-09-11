import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = new Todo(0,'','');
  todos : Todo[];
  constructor(
    private TodoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos= this.TodoService.getTodo();
  }


  BtnAddTodo(){
    if(this.todos.length){
    var indexLast= this.todos.length-1;
    this.todo.id = this.todos[indexLast].id + 1;
   }
    else{
      this.todo.id = 1;
    }
    this.TodoService.addTodo(this.todo);
    this.TodoService.LoggerTodos();
    this.todo = new Todo(0,'','');
  }

  SupprimerToDo(todo: Todo){
    this.TodoService.deleteTodo(todo);
  }

}
