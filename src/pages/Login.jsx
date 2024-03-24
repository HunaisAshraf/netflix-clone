import React, { useContext, useState } from "react";
import background from "../assets/netflixbg.jpg";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await logIn(email, password);
    if (res.success) {
      navigate("/");
    }
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${background})`,
      }}
    >
      <div className="flex w-full h-full justify-center items-center">
        <form
          className="bg-black py-10 px-16 opacity-85 rounded-sm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-3xl font-extrabold my-4">Sign In</h1>
          <div className="py-2">
            <input
              className="outline-none p-4 bg-black opacity-90 border-2 rounded"
              type="text"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail((e) => (e = event.target.value))}
            />
          </div>
          <div className="py-2">
            <input
              className="outline-none p-4 bg-black opacity-90 border-2 rounded"
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword((p) => (p = event.target.value))}
            />
          </div>
          <button className="bg-red-600 font-bold w-full py-2 my-2">
            Sign In
          </button>

          <Link to="/signup">
            <p type="submit" className="text-white text-center">
              Register Account
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
