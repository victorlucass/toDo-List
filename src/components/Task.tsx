import { Trash } from "phosphor-react";
import { TaskType } from "../models/TaskType";
import styles from "./Task.module.scss";

export function Task({ id, isDone, onDeleteTask, text }: TaskType) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }
  function handleChecked() {
    console.log("teste");
  }
  return (
    <section className={styles.content}>
      <div className={styles.taskInfo}>
        {/* <input type="checkbox" id="checkboxId" onChange={handleChecked} /> */}
        {/* https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */}
        {/* <label htmlFor="checkboxId"></label> */}
        <p>{text}</p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </section>
  );
}
