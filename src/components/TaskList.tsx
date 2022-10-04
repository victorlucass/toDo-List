import { ClipboardText } from "phosphor-react";
import { useEffect, useState } from "react";
import { TaskArray } from "../models/TaskListProps";
import { TaskProps } from "../models/TaskProps";
import { Task } from "./Task";
import styles from "./TaskList.module.scss";

export function TaskList({
  listTask,
  deleteMethod,
  updateStatusMethod,
}: TaskArray) {
  const [toDoList, setToDoList] = useState<TaskProps[]>([]);

  function updateTaskStatus(id: string, status: boolean) {
    updateStatusMethod(id, status);
    const toDoList = listTask.filter((task) => task.isDone == true);
    setToDoList(toDoList);
  }

  return (
    <>
      <section className={styles.content}>
        <div className={styles.taskCreate}>
          Tarefas criadas{" "}
          <span className={styles.counter}>{listTask.length}</span>
        </div>
        <div className={styles.done}>
          Concluídas{" "}
          <span className={styles.counter}>
            {toDoList.length} de {listTask.length}
          </span>
        </div>
      </section>
      {listTask.length == 0 ? (
        <section className={styles.taskEmpty}>
          <ClipboardText size={70} />
          <span>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </span>
        </section>
      ) : (
        listTask.map((task: TaskProps) => {
          return (
            <Task
              id={task.id}
              text={task.text}
              key={task.id}
              isDone={task.isDone}
              onDeleteTask={deleteMethod}
              updateStatusTask={updateTaskStatus}
              stateStatus={{ toDoList, setToDoList }}
            />
          );
        })
      )}
    </>
  );
}
