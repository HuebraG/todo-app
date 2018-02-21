import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../toDo';
import { ToDoList } from '../toDoList';

@Component({
  selector: 'app-todolist-detail',
  templateUrl: './todolist-detail.component.html',
  styleUrls: ['./todolist-detail.component.css']
})
export class TodolistDetailComponent implements OnInit {

  @Input() list: ToDoList;

  finishToDo(todo: ToDo): void {
    todo.isDone = true;
  }

  deleteToDo(todo: ToDo): void {
    this.list.deleteToDo(todo);
  }

  addToDo() : void {
    this.list.addToDo();
  }

  constructor() { }

  ngOnInit() {
  }

}
