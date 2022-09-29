import { ClipboardText } from "phosphor-react";
import styles from "./TaskList.module.scss";

export function TaskList() {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.taskCreate}>
          Tarefas criadas <span className={styles.counter}>0</span>
        </div>
        <div className={styles.done}>
          Concluídas <span className={styles.counter}>0</span>
        </div>
      </section>
      <section className={styles.taskEmpty}>
        <ClipboardText size={70} />
        <span>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </section>
    </>
  );
}
