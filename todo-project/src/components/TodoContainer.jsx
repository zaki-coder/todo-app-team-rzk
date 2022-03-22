import React from 'react'
import Todo from './Todo'

const TodoContainer = () => {
  return (
    <div className="flex justify-around gap-x-3 sm:w-full md:container md:mx-auto my-4">
      <Todo title="To do" amount="2" />
      <Todo title="In Progress" amount="1" />
      <Todo title="Completed" amount="0" />
      {/* <Todo /> */}
    </div>
  );
}

export default TodoContainer