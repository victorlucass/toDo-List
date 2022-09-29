import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import "./styles/global.scss";
import "./styles/reset.scss";

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <NewTask />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
