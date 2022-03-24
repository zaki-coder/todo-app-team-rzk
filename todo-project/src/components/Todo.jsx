import React from "react";
import Button from "./Button";
import TodoHeader from "./TodoHeader";
import TodoInfo from "./TodoInfo";
import AddTodo from "./AddTodo";

const Todo = ({title, amount, name, description}) => {
  return (
    <div className="min-w-[200px] w-[32%] h-fit p-2 bg-[#F6FAFB] rounded-lg overflow-y-auto ">
      <TodoHeader title={title} amount={amount} />
      <div className="border-b-2 -mt-2 border-gray-300">
        <form className="">
          <div className="mb-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <textarea
                type="text"
                placeholder="Description"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 "
              />
            </div>

            <div className="mt-4 text-grey-dark text-center ">
              <a
                className="text-white hover:bg-gray-500 font-bold py-3 px-2 bg-gray-400 rounded-lg "
                href="#"
              >
                Add Todo
              </a>
            </div>
          </div>
        </form>
      </div>
      {/* <Button /> */}
      <TodoInfo name={name} description={description} />
    </div>
  );
};

export default Todo;
