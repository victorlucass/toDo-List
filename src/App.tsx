import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import { TaskProps } from "./models/TaskProps";
import "./styles/global.scss";
import "./styles/reset.scss";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [listTask, setlistTask] = useState<TaskProps[]>([]);

  useEffect(() => {
    const dataLocal = localStorage.getItem("tasks");
    dataLocal && setlistTask(JSON.parse(dataLocal));
  }, []);

  function createTask(content: string) {
    const newTask: TaskProps = {
      id: uuidv4(),
      text: content,
      isDone: false,
    };
    setlistTask((resources) => {
      localStorage.setItem("tasks", JSON.stringify([...resources, newTask]));
      return [...resources, newTask];
    });
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = listTask.filter((task) => {
      return task.id != id;
    });
    setlistTask(tasksWithoutDeletedOne);
    localStorage.setItem("tasks", JSON.stringify(tasksWithoutDeletedOne));
  }

  function updateStatusTask(id: string, status: boolean) {
    const listUpdateTask = [...listTask];
    listUpdateTask.forEach((task, index) => {
      if (task.id == id) {
        task.isDone = !status;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(listUpdateTask));
    setlistTask(listUpdateTask);
  }

  return (
    <div>
      <Header />
      <main className="main-content">
        <NewTask creationMethod={createTask} />
        <TaskList
          listTask={listTask}
          deleteMethod={deleteTask}
          updateStatusMethod={updateStatusTask}
        />
      </main>
    </div>
  );
}

export default App;
