import { ClipboardText } from "phosphor-react";
import { useEffect, useState } from "react";
import { TaskArray } from "../models/TaskArray";
import { TaskType } from "../models/TaskType";
import { Task } from "./Task";
import styles from "./TaskList.module.scss";

export function TaskList({
  tasks,
  deleteMethod,
  updateStatusMethod,
}: TaskArray) {
  const [tasksDone, setTasksDone] = useState<TaskType[]>([]); //responsavel por pegar as tasks com status "DONE"

  function updateTaskStatus(id: number, status: boolean) {
    if (updateStatusMethod) {
      updateStatusMethod(id, status);
      const todosDones = tasks.filter((task) => task.isDone == true);
      setTasksDone(todosDones);
      console.log(todosDones);
    }
  }
  return (
    <>
      <section className={styles.content}>
        <div className={styles.taskCreate}>
          Tarefas criadas <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div className={styles.done}>
          Concluídas{" "}
          <span className={styles.counter}>
            {tasksDone.length} de {tasks.length}
          </span>
        </div>
      </section>
      {tasks.length == 0 ? (
        <section className={styles.taskEmpty}>
          <ClipboardText size={70} />
          <span>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </span>
        </section>
      ) : (
        tasks.map((task: TaskType) => {
          return (
            <Task
              id={task.id}
              text={task.text}
              key={task.id}
              onDeleteTask={deleteMethod}
              updateStatusTask={updateTaskStatus}
              status_={{ tasksDone, setTasksDone }}
            />
          );
        })
      )}
    </>
  );
}
