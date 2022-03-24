import React from 'react'

const TodoHeader = ({title, amount}) => {
  return (
    <div className="flex justify-between w-full">
      <h4 className="text-lg font-medium">{title}</h4>
      <span className="rounded-xl px-2 py-1 bg-[#E9F3F2] text-[#60A99A]">
        {amount}
      </span>
    </div>
  );
}

export default TodoHeader