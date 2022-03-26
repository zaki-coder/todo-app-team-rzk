import React from "react";

const AddTodo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">New Todo</h3>
          <form>
            <div className="mt-2">
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
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="mt-6 text-grey-dark text-center">
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
    </div>
  );
};

export default AddTodo;
