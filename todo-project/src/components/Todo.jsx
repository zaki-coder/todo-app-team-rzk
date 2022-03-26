import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import TodoHeader from "./TodoHeader";

const Todo = ({ title }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("completed");

  console.log(todos);

  const persistDB = (newTodo) => {
    axios.post("http://localhost:4000/todos", newTodo, {
      withCredentials: true,
    });
  };

  useEffect(() => {
    async function getTodos() {
      const res = await axios.get("http://localhost:4000/todos", {
        withCredentials: true,
      });
      setTodos(res.data.todos);
    }
    getTodos();
  }, []);

  const createTodo = (e) => {
    e.preventDefault();
    if (!todoTitle) return;
    const newTodo = {
      title: todoTitle,
      description: todoDesc,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    persistDB(newTodos);
    setTodoTitle("");
    setTodoDesc("");
  };

  const toggleTodo = (id) => {
    const newTodoList = [...todos];
    const todoItem = newTodoList.find((todo) => todo._id === id);
    todoItem.completed = !todoItem.completed;
    setTodos(newTodoList);
    persistDB(newTodoList);
  };

  const getTodos = () => {
    return todos.filter((todo) =>
      filter === "completed" ? todo.completed : !todo.completed
    );
  };

  return (
    <div className="min-w-[200px] w-[32%] h-fit p-2 bg-[#F6FAFB] rounded-lg ">
      <TodoHeader title={title} amount={todos.length} />
      <div className="border-b-2 -mt-2 border-gray-300">
        <form onSubmit={createTodo}>
          <div className="mb-4">
            <div>
              <input
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <textarea
                value={todoDesc}
                onChange={(e) => setTodoDesc(e.target.value)}
                type="text"
                placeholder="Description"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 "
              />
            </div>

            <div className="mt-4 text-grey-dark text-center ">
              <button
                type="submit"
                className="text-white hover:bg-gray-500 font-bold py-3 px-2 bg-gray-400 rounded-lg "
              >
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>

      {!!todos &&
        todos.map((todo) => (
          <div
            key={todo._id}
            className="bg-whiteSmoke px-2 py-1 my-4"
          >
            <div className="flex items-center">
              <input
                onClick={() => toggleTodo(todo._id)}
                type="checkbox"
                checked={todo.completed}
                name="name"
                className="mr-2 w-4 h-4"
              />
              <h4 className="text-lg font-semibold">{todo.title}</h4>
            </div>
            <p className="my-4 text-gray-500">{todo.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Todo;
