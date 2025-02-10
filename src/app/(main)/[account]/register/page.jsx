"use client";

import { useSignupMutation } from "@/redux/features/auth/authApis";
import Loader from "@/utils/loader/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Register = () => {
  const router = useRouter();
  const [viewPass, setViewPass] = useState(false);
  const [signup, { isLoading }] = useSignupMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      console.log(response);
      if (response?.data) {
        toast.success(response.data?.message);
        router.push("/login");
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
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center items-center gap-y-3"
        >
          <h1 className="mt-3 text-2xl font-medium">Create Account</h1>

          {/* Name */}
          <div className="w-full sm:w-[530px] mx-auto flex flex-col">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="h-[40px] w-full px-3 border border-gray-500 text-primary font-medium"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-sm- text-red-500">Name is required</span>
            )}
          </div>

          {/* Phone */}
          <div className="w-full sm:w-[530px] mx-auto flex flex-col">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="h-[40px] w-full px-3 border border-gray-500 text-primary font-medium"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-sm- text-red-500">Phone is required</span>
            )}
          </div>

          {/* Email */}
          <div className="w-full sm:w-[530px] mx-auto flex flex-col">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="h-[40px] w-full px-3 border border-gray-500 text-primary font-medium"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm- text-red-500">Email is required</span>
            )}
          </div>

          {/* Address */}
          <div className="w-full sm:w-[530px] mx-auto flex flex-col">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="h-[40px] w-full px-3 border border-gray-500 text-primary font-medium"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-sm- text-red-500">Address is required</span>
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
            {errors.password && (
              <span className="text-sm- text-red-500">
                Password is required
              </span>
            )}
          </div>

          <button className="w-max bg-primary hover:bg-orange-800 transition-all duration-300 ease-in-out px-5 py-2 rounded-sm text-white font-medium">
            SIGN IN
          </button>

          <Link
            href="/account/login"
            className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
          >
            Have an account? Login
          </Link>
        </form>
      )}
    </div>
  );
};

export default Register;
