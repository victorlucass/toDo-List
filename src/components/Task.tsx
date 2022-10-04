import { Trash } from "phosphor-react";
import { useState } from "react";
import { TaskType } from "../models/TaskType";
import styles from "./Task.module.scss";

export function Task({
  id,
  onDeleteTask,
  text,
  updateStatusTask,
  status_,
}: TaskType) {
  const [status, setStatus] = useState(false);

  function handleDeleteTask() {
    if (onDeleteTask) {
      onDeleteTask(id);
      const newListDone = status_.tasksDone.filter((task: any) => {
        return task.id != id;
      });
      status_.setTasksDone(newListDone);
    }
  }
  function handleChecked() {
    setStatus(!status);
    if (updateStatusTask) {
      updateStatusTask(id, status);
    }
  }
  return (
    <section className={styles.content}>
      <div className={styles.taskInfo}>
        <input
          type="checkbox"
          checked={status}
          id={id.toString()}
          onChange={handleChecked}
        />
        {/* https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */}
        <label htmlFor={id.toString()}></label>
        <p className={status ? styles.textChecked : styles.textNotChecked}>
          {text}
        </p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </section>
  );
}
