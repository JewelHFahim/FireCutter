"use client";

import { useLoginMutation } from "@/redux/features/auth/authApis";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextRoute = searchParams.get("next") || "/";
  const [viewPass, setViewPass] = useState(false);
  const [login] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response);
      if (response?.data) {
        toast.success(response.data?.message);
        Cookies.set("fc_token", response.data?.token, {
          secure: true,
          sameSite: "strict",
        });
        router.push(nextRoute);
      }
      if (response.error) {
        toast.error(response?.error?.data?.message);
      }
      if (response?.error?.error) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Try again later");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center items-center gap-y-5 pb-5"
      >
        <h1 className="mt-5 text-2xl font-medium">Login</h1>

        {/* Number */}
        <div className="w-full sm:w-[530px] mx-auto flex flex-col">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="h-[40px] w-full px-3 border border-gray-500 text-primary font-medium"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm- text-red-500">
              Email number is required
            </span>
          )}
        </div>

        {/* Password */}
        <div className="w-full sm:w-[530px] mx-auto flex flex-col">
          <label>Password</label>
          <div className="relative w-full">
            <input
              type={viewPass ? "text" : "password"}
              placeholder="Enter your password"
              className="h-[40px] w-full px-3 border border-gray-500 text-primary"
              {...register("password", { required: true })}
            />
            <button
              onClick={() => setViewPass(!viewPass)}
              type="button"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-gray-500"
            >
              {viewPass ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>

          {errors.phone && (
            <span className="text-sm- text-red-500">Password is required</span>
          )}
        </div>

        {/* <Link
          href="/"
          className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
        >
          Forgot your password?
        </Link> */}

        <button
          type="submit"
          className="w-max bg-primary hover:bg-orange-800 transition-all duration-300 ease-in-out px-8 py-2 rounded-sm text-white font-medium"
        >
          SIGN IN
        </button>

        <Link
          href="/account/register"
          className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
        >
          Create account
        </Link>
      </form>
    </div>
  );
};

export default Login;
