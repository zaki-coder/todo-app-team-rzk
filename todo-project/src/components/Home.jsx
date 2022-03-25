import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import TodoContainer from "./TodoContainer";
import Header from "./Header";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useContext(UserContext);
  let navigate = useNavigate();

  if(!user.email) {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/login");
  //   }, 3000);
  // }, []);

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