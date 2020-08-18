import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(public id:number, public description:string, public isDone:boolean, public targetDate:Date) {

  }
}
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos = [
    new Todo(1, 'Reach target to write the book', false, new Date),
    new Todo(2, 'Reach target to read a book', false, new Date),
    new Todo(3, 'Reach target to write code for project', false, new Date)
  ]
  // todo = {
  //   id : 1,
  //   task : 'write'
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
