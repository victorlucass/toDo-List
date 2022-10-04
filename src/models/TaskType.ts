export interface TaskType {
  id: number;
  text: string;
  isDone?: boolean;
  onDeleteTask?: (id: number) => void;
  updateStatusTask?: (id: number, status: boolean) => void;
  status_?: any;
}
