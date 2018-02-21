import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../toDoList';
import { ToDo } from '../toDo';
import { TodolistViewComponent } from '../todolist-view/todolist-view.component';
import { ListService } from '../list.service';

@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.css']
})
export class TodolistFormComponent implements OnInit {
  newList = this.resetList();

  addToDo() {
    this.newList.list.push({ name: "tache", description: "description", isDone: false });
  }

  delete(todo: ToDo) {
    var index = this.newList.list.indexOf(todo, 0);
    if (index > -1) {
      this.newList.list.splice(index, 1)
    }
  }

  addList(newList) {
    this.addListService.addList(newList);
    this.newList = this.resetList();
  }

  resetList() : ToDoList {
  return new ToDoList("nouvelle liste", "description de la liste",
    [{ name: "nouvelle tâche", description: "description de la tâche", isDone: false }]);
  }

  constructor(private addListService : ListService) { }

  ngOnInit() {
  }

}
