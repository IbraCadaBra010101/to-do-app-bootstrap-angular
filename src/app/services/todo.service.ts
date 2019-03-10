import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../todo';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) {
  }

  // delete to do
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = ` ${this.todosUrl}/ ${'?_limit=5'}`;
    return this.http.delete<Todo>(url, httpOptions);

  }

  // get todos

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

// add to do
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
