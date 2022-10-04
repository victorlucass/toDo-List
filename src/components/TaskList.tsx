import { ClipboardText } from "phosphor-react";
import { TaskArray } from "../models/TaskArray";
import { TaskType } from "../models/TaskType";
import { Task } from "./Task";
import styles from "./TaskList.module.scss";

export function TaskList({ tasks, deleteMethod }: TaskArray) {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.taskCreate}>
          Tarefas criadas <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div className={styles.done}>
          Concluídas <span className={styles.counter}>0</span>
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
            />
          );
        })
      )}
    </>
  );
}
