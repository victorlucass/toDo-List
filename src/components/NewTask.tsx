import styles from "./NewTask.module.scss";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";

export function NewTask({ createTask }: any) {
  const [inputText, setInputText] = useState<string>("Comprar pão");
  function handleNewCommentInvalid(event: any) {
    event.target.setCustomValidity("Campo está vazio!");
  }
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
        onInvalid={handleNewCommentInvalid}
      />
      <button onClick={handleCreateTask} disabled={inputText == ""}>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  );
}
