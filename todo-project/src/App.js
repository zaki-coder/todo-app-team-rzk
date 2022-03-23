import Register from "./components/Register";
import Login from "./components/Login";

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newtodo" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;