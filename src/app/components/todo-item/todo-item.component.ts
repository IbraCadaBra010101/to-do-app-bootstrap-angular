import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteToDo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  setClasses() {
    return {
      todo: true,
      'is-completed': this.todo.completed
    };
  }

  onToggle(todo) {
    //  toggle on ui
    todo.completed = !todo.completed;
    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    this.deleteToDo.emit(todo);
  }
}
