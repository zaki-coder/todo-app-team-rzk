import Sidebar from "./components/Sidebar";
import TodoContainer from "./components/TodoContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
      <TodoContainer />
     </div>
  );
}

export default App;
