export interface TaskType {
  id: number;
  text?: string;
  isDone?: boolean;
  onDeleteTask: (id: number) => void;
}
