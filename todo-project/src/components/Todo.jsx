import React from "react";
import Button from "./Button";
import TodoHeader from "./TodoHeader";
import TodoInfo from "./TodoInfo";

const Todo = ({title, amount, name, description}) => {
  return (
    <div className="min-w-[300px] w-80 min-h-[500px] p-2 bg-paleBlue rounded-lg overflow-y-hidden">
      <TodoHeader title={title} amount={amount} />
      <Button />
      <TodoInfo
        name={name}
        description={description}
      />
    </div>
  );
};

export default Todo;
