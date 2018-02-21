import { Injectable } from '@angular/core';
import { LIST } from './mock-lists';
import { ToDoList } from './toDoList';

@Injectable()
export class ListService {
  private listOfLists = LIST;

  getLists(): ToDoList[] {
    return this.listOfLists;
  }

  addList(list: ToDoList) {
    this.listOfLists.push(list);
  }

  deleteList(list: ToDoList) {
    var index = this.listOfLists.indexOf(list, 0);
    if (index > -1) {
      this.listOfLists.splice(index, 1)
    }
  }


  constructor() { }

}
