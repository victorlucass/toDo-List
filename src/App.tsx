import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import { TaskType } from "./models/TaskType";
import "./styles/global.scss";
import "./styles/reset.scss";

function App() {
  const [listTask, setListTask] = useState<TaskType[]>([]);
  function createTask(text: string) {
    const newTask: TaskType = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      isDone: false,
    };
    setListTask((value) => {
      return [...value, newTask];
    });
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = listTask.filter((task) => {
      return task.id != id;
    });
    setListTask(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <main className="main-content">
        <NewTask createTask={createTask} />
        <TaskList tasks={listTask} deleteMethod={deleteTask} />
      </main>
    </div>
  );
}

export default App;
