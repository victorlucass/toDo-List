import styles from "./NewTask.module.scss";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";

export function NewTask({ createTask }: any) {
  const [inputText, setInputText] = useState<string>("Comprar pão");
  function handleTextInput(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }
  function handleCreateTask() {
    createTask(inputText);
    setInputText("");
  }

  return (
    <div className={styles.content}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        onChange={handleTextInput}
        value={inputText}
      />
      <button onClick={handleCreateTask}>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  );
}
