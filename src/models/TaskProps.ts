export interface TaskProps {
  id: string;
  text: string;
  isDone: boolean;
  onDeleteTask?: (id: string) => void;
  updateStatusTask?: (id: string, status: boolean) => void;
  stateStatus?: StateStatus;
}

interface StateStatus {
  toDoList: TaskProps[];
  setToDoList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
