import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../toDoList';
import { ListService } from '../list.service'


@Component({
  selector: 'app-todolist-view',
  templateUrl: './todolist-view.component.html',
  styleUrls: ['./todolist-view.component.css']
})
export class TodolistViewComponent implements OnInit {
  listOfLists: ToDoList[];
  selectedList: ToDoList;

  selectList(list: ToDoList) {
    this.selectedList = list;
  }

  deleteList(list: ToDoList): void {
    this.addListService.deleteList(list);
    this.selectedList = null;
  }

  addList(list: ToDoList) {
    this.listOfLists.push(list);
  }

  allToDoAreChecked(list: ToDoList): boolean {
    let result = true;
    for (let todo of list.list) {
      if (!todo.isDone) {
        result = false;
        break;
      }
    }
    return result;
  }

  constructor(private addListService: ListService) { }

  ngOnInit() {
    this.listOfLists = this.addListService.getLists();
  }

}
