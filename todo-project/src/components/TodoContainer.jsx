import React from 'react'
import Todo from '../components/Todo';

const TodoContainer = () => {
  return (
    <div className="flex justify-around gap-x-3 sm:w-full lg:max-w-[955px] lg:mx-auto my-4">
      <Todo
        title="To do"
        amount="2"
        name="Design"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, totam!"
      />
      <Todo
        title="In Progress"
        amount="1"
        name="Development"
        description="We need 2 different concepts for a software page in our program."
      />

      <Todo
        title="Completed"
        amount="0"
        name="Logo redesign"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sed?."
      />
    </div>
  );
}

export default TodoContainer