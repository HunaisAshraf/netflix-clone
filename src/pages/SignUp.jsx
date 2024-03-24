import React, { useContext, useState } from "react";
import background from "../assets/netflixbg.jpg";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp, user } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = await signUp(name, email, password);
    if (data.success) {
      navigate("/");
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  return user ? (
    navigate("/")
  ) : (
    <div
      className="h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${background})`,
      }}
    >
      <Toaster />
      <div className="flex w-full h-full justify-center items-center">
        <form
          className="bg-black py-10 px-16 opacity-85 rounded-sm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-3xl font-extrabold my-4">Sign Up</h1>
          <div className="py-2">
            <input
              className="outline-none p-4 bg-black opacity-90 border-2 rounded"
              type="text"
              placeholder="user name"
              value={name}
              onChange={(event) => setName((n) => (n = event.target.value))}
              required
            />
          </div>
          <div className="py-2">
            <input
              className="outline-none p-4 bg-black opacity-90 border-2 rounded"
              type="text"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail((e) => (e = event.target.value))}
              required
            />
          </div>
          <div className="py-2">
            <input
              className="outline-none p-4 bg-black opacity-90 border-2 rounded"
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword((p) => (p = event.target.value))}
              required
            />
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              className="bg-red-600 font-bold w-full py-2 my-2"
            >
              Sign Up
            </button>
          )}
          <Link to="/login">
            <p className="text-center">Already have an account</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
