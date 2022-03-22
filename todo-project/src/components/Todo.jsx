import React from "react";
import Button from "./Button";
import TodoHeader from "./TodoHeader";
import TodoInfo from "./TodoInfo";

const Todo = ({title, amount}) => {
  return (
    <div className="min-w-[300px] w-80 min-h-[500px] p-2 bg-paleBlue rounded-lg overflow-y-hidden">
      <TodoHeader title="To do" amount="1" />
      <Button />
      <TodoInfo
        name="Design"
        description="We need 2 different concepts for a software page in our program."
      />
    </div>
  );
};

export default Todo;
