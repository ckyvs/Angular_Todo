import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service'
import { Router } from '@angular/router';

export class Todo {
  constructor(public id:number, public description:string, public targetDate:Date, public isDone:boolean) {

  }
}
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos : Todo[]
  // todo = {
  //   id : 1,
  //   task : 'write'
  // }

  message:string;
  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos() {
    this.todoService.retrieveAllTodos('ck').subscribe(
      res=>{
        this.todos=res;
        console.log(this.todos)
      }
    )
  }

  updateTodo(id) {
    console.log(`updated ${id}`)
    this.router.navigate(['todos', id])
  }

  deleteTodo(id) {
    this.todoService.deleteTodoFromService(id, 'ck').subscribe(
      (res) => {
        console.log(res);
        this.message=`Todo ${id} deleted Successfully!`;
        this.refreshTodos();
      }
    );
  }
  addTodo() {
    this.router.navigate(['todos', 0])
  }
}
