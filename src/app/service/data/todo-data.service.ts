import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todos-list/todos-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/jpa/users/${username}/todos`);
  }

  deleteTodoFromService(id, username) {
    return this.httpClient.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  retrieveTodoFromService(id, username) {
    return this.httpClient.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  updateTodoFromService(id, username, todo) {
    return this.httpClient.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`, todo);
  }
  addTodoToService(username, todo) {
    return this.httpClient.post(`http://localhost:8080/jpa/users/${username}/todos`, todo);
  }
}
