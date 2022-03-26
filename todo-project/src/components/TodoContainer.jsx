import React from 'react'
import Todo from '../components/Todo';


const TodoContainer = () => {
  // const [todos, setTodos] = useState([]);

  // const persistDB = (newTodo) => {
  //   axios.post("http://localhost:4000/todos", newTodo);
  // }

  // useEffect(() => {
  //   async function getTodos() {
  //     const res = await axios.get("http://localhost:4000/todos", {
  //       withCredentials: true,
  //     });
  //     setTodos(res.data);
  //   }
  //   getTodos();
  // }, []);

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   if (!todoText) return;
  //   const newTodo = { id: uuidv4(), checked: false, text: todoText };
  //   const newTodos = [...todos, newTodo];
  //   setTodos(newTodos);
  //   setTodoText("");
  //   persistDB(newTodos);
  // };
    
  return (
    <div className="flex justify-around gap-x-3 h-screen sm:w-full lg:max-w-[955px] lg:mx-auto my-4 overflow:hidden">
      <Todo title="To do" />
    </div>
  );
}

export default TodoContainer