import styles from "./NewTask.module.scss";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <div className={styles.content}>
      <input placeholder="Adicione uma nova tarefa" type="text" />
      <button>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  );
}
