import { TaskType } from "./TaskType";

export interface TaskArray {
  tasks: TaskType[];
  deleteMethod: (id: number) => void;
  updateStatusMethod?: (id: number, status: boolean) => void;
}
