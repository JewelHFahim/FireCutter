import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="">

      <div className="w-full flex flex-col justify-center items-center gap-y-5 pb-5">
        <h1 className="mt-5 text-2xl font-medium">Login</h1>

        <div className="w-full sm:w-[530px] mx-auto flex flex-col">
          <label>Email</label>
          <input
            type="text"
            className="h-[40px] w-full px-3 border border-gray-500 text-primary font-medium"
          />
        </div>

        <div className="w-full sm:w-[530px] mx-auto flex flex-col">
          <label>Password</label>
          <input
            type="password"
            className="h-[40px] w-full px-3 border border-gray-500 text-primary"
          />
        </div>

        <Link
          href="/"
          className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
        >
          Forgot your password?
        </Link>

        <button className="w-max bg-primary hover:bg-orange-800 transition-all duration-300 ease-in-out px-5 py-2 rounded-sm text-white font-medium">
          SIGN IN
        </button>

        <Link
          href="/account/register"
          className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
        >
          Create account
        </Link>
      </div>

    </div>
  );
};

export default Login;
