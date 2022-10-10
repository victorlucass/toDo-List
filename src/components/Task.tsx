import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { TaskProps } from "../models/TaskProps";
import styles from "./Task.module.scss";

export function Task({
  id,
  onDeleteTask,
  text,
  updateStatusTask,
  stateStatus,
}: TaskProps) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const dataLocal = localStorage.getItem("tasks");
    if (dataLocal) {
      const dataLocalObject = JSON.parse(dataLocal);
      const dataLocalSelect: TaskProps[] = dataLocalObject.filter(
        (data: TaskProps) => data.id == id
      );
      dataLocalSelect && setStatus(dataLocalSelect[0].isDone);
    }
  }, []);

  function handleDeleteTask() {
    onDeleteTask!(id);
    const newTodoList = stateStatus!.toDoList.filter((task: any) => {
      return task.id != id;
    });
    stateStatus!.setToDoList(newTodoList);
  }
  function handleChecked() {
    setStatus(!status);
    updateStatusTask!(id, status);
  }
  return (
    <section className={styles.content}>
      <div className={styles.taskInfo}>
        <input
          type="checkbox"
          checked={status}
          id={id}
          onChange={handleChecked}
        />
        {/* https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */}
        <label htmlFor={id}></label>
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
