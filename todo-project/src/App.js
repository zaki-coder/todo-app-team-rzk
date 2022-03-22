import Sidebar from "./components/Sidebar";
import TodoContainer from "./components/TodoContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex justify-evenly max-w-[1300px] mx-auto">
        <Sidebar />
      <div className="flex-col">
        <Header />
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
