import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import "./styles/global.scss";
import "./styles/reset.scss";

function App() {
  return (
    <>
      <Header />
      <NewTask />
    </>
  );
}

export default App;
