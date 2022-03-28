import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const user = useContext(UserContext);

  function login(e) {
    e.preventDefault();

    const data = { email, password };
    axios
      .post("http://localhost:4000/login", data, { withCredentials: true })
      .then((res) => {
        user.setEmail(res.data.email);
        setEmail("");
        setPassword("");
        setLoginError(false);
      })
      .catch(() => {
        setLoginError(true);
      });
    navigate("/");
  }
  let navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">Login</h3>
        <form action="" onSubmit={(e) => login(e)}>
          {loginError && (
            <div className="text-red-900 text-sm text-center mt-2">
              WRONG EMAIL OR PASSWORD!
            </div>
          )}
          <div className="mt-4">
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Login
            </button>

            <div className="mt-6 text-grey-dark text-center">
              Don't have an account?{" "}
              <a className="text-blue-600 hover:underline font-bold" href="#">
                <Link to="/register">Register</Link>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logout;
