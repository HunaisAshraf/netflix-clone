import React from "react";
import background from "../assets/netflixbg.jpg";

const Login = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex w-full h-full justify-center items-center">
        <form className="bg-black py-10 px-16 opacity-85 rounded-sm">
          <h1 className="text-3xl font-extrabold my-4">Sign In</h1>
          <div className="py-2">
            <input
              className="outline-none p-4 bg-black opacity-90 border-2 rounded"
              type="text"
              placeholder="email"
            />
          </div>
          <div className="py-2">
            <input
              className="outline-none p-4 bg-black opacity-90 border-2 rounded"
              type="password"
              placeholder="password"
            />
          </div>
          <button className="bg-red-600 font-bold w-full py-2 my-2">
            Sign In
          </button>
          <p className="text-white text-center">Forget password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
