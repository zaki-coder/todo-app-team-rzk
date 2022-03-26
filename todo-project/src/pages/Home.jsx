import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import TodoContainer from "../components/TodoContainer";
import Header from "../components/Header";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useContext(UserContext);
  let navigate = useNavigate();

  if(!user.email) {
    navigate("/login");
  }


  return (
    <div className="flex justify-evenly max-w-[1320px] mx-auto border-4 rounded-3xl overflow-x-hidden max-h-screen ">
      <Sidebar />
      <div className="flex-col overflow-y-scroll">
        <Header />
        <TodoContainer />
      </div>
    </div>
  );
}

export default Home