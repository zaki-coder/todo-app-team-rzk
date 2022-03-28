import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import UserContext from "./context/UserContext";
import Logout from "./pages/Logout";


function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/users", { withCredentials: true })
      .then((res) => {
        setEmail(res.data.email);
      });
  }, []);

  

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/newtodo" element={<AddTodo />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
