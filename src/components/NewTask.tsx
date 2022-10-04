import styles from "./NewTask.module.scss";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { NewTaskProps } from "../models/NewTaskProps";

export function NewTask({ creationMethod }: NewTaskProps) {
  const [inputText, setInputText] = useState<string>("");

  function handleTextInput(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }
  function handleCreateTask() {
    creationMethod(inputText);
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
      <button onClick={handleCreateTask} disabled={inputText == ""}>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  );
}
