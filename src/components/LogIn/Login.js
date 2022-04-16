import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="w-4/12 border border-2 border-gray-600 rounded-md shadow-xl shadow-orange-700 py-8 mx-auto mt-8">
        <h1 className="text-center font-bold text-2xl">Log in</h1>
        <div className="mx-auto w-8/12">
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="w-11/12 border border-2 sha border-gray-600 "
            placeholder="Email"
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="mx-auto w-8/12">
          <label htmlFor="password">Password</label>
          <br />
          <input
            className=" w-11/12 border border-2 border-gray-600"
            type="password"
            placeholder="Password"
            name="password"
            id=""
            required
          />
        </div>
        <div className="mx-auto w-8/12 mt-8">
          <input
            className="bg-orange-300 hover:bg-orange-600 rounded-xl w-11/12 border border-2 border-gray-600"
            type="submit"
            value="Log in"
            name="submit"
            id=""
          />
        </div>
        <p className="text-lg text-center font-semibold">
          New to amazon?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-900">
            {" "}
            Create new Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
