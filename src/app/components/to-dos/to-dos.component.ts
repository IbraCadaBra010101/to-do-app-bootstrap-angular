import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }


  deleteToDo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}


