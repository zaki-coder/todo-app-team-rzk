import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import UserContext from "./context/UserContext";


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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newtodo" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
