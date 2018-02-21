import { ToDo } from './toDo';

export class ToDoList {
  name: string;
  description: string;
  list: ToDo[];

  constructor(name: string, description: string, todo: ToDo[]) {
    this.name = name;
    this.description = description;
    this.list = todo;
  }

  public deleteToDo(todo: ToDo): void {
    var index = this.list.indexOf(todo, 0);
    if (index > -1) {
      this.list.splice(index, 1);
    }

  }
}
