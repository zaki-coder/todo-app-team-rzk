import React from "react";
import Sidebar from "./Sidebar";
import TodoContainer from "./TodoContainer";
import Header from "./Header";

const Home = () => {
  return (
    <div className="flex justify-evenly w-[1300px] mx-auto border-4 rounded-3xl overflow-hidden">
        <Sidebar />
        <div className="flex-col">
          <Header />
          <TodoContainer />
        </div>
    </div>
  )
}

export default Home