import React from 'react'
import circle from '../assets/circle.png'

const TodoInfo = ({name, description}) => {
  return (
    <div className="bg-whiteSmoke px-2 py-1 my-4">
      <div className="flex ">
        <img className="object-contain mr-1" src={circle} alt="circle" />
        <h4 className="text-lg font-semibold">{name}</h4>
      </div>
      <p className="my-4 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default TodoInfo