import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todos-list/todos-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, '', new Date(), false)
    if (this.id != 0) {
      this.todoService.retrieveTodoFromService(this.id, 'ck').subscribe(
        (res) => {
          this.todo = res;
        }
      )
    }
  }

  saveTodo() {
    if (this.id != 0) {
      this.todoService.updateTodoFromService(this.id, 'ck', this.todo).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['todos']);
        }
      )
    }
    else {
      this.todoService.addTodoToService('ck', this.todo).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['todos']);
        }
      )
    }
  }

}
