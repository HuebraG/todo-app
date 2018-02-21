import { ToDoList } from './toDoList';
import { ToDo } from './toDo';

export const LIST: ToDoList[] = [
  new ToDoList(
     "liste1",
   "une première liste",
   [{ name: "tache1", description: "une première tâche", isDone: false },
  { name: "tache2", description: "une seconde tâche", isDone: false },
  { name: "tache3", description: "une dernière tâche", isDone: true }]
  ),
  new ToDoList(
    "liste2",
    "une seconde liste",
    [{ name: "tache5", description: "une tâche", isDone: false },
    { name: "tache6", description: "une autre tâche", isDone: false },
    { name: "tache7", description: "la septième tâche", isDone: true }]
  )
];
