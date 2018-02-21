import { ToDoList } from './toDoList';
import { ToDo } from './toDo';

export const LIST: ToDoList = {
  name: "liste1",
  list: [{ name: "tache1", description: "une première tâche", isDone: false },
    { name: "tache2", description: "une seconde tâche", isDone: false },
    { name: "tache3", description: "une dernière tâche", isDone: true}]
};
