import { TaskProps } from "./TaskProps";

export interface TaskArray {
  listTask: TaskProps[];
  deleteMethod: (id: string) => void;
  updateStatusMethod: (id: string, status: boolean) => void;
}
