"use client"

import React, { act, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { ImMenu } from "react-icons/im";
import { LiaHornbill, LiaUserSolid } from "react-icons/lia";
import { TbCurrentLocation } from "react-icons/tb";
import Cookies from "js-cookie";
import { useLogoutMutation } from "@/redux/features/auth/authApis";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AcccountNav = ({ active, setActive }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const res = await logout();
      console.log(res);
      if (res?.data) {
        toast.success("Logout success");
        Cookies.remove("fc_token");
        router.push("/");
      }
      if (res?.error) {
        toast.error("Logout failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const menus = [
    {
      id: 1,
      name: "My Orders",
      path: "orders",
      icon: <CiBoxList />,
    },
    {
      id: 2,
      name: "Account Info",
      path: "account",
      icon: <LiaUserSolid />,
    },
    {
      id: 3,
      name: "Reset Password",
      path: "reset",
      icon: <TbCurrentLocation />,
    },
  ];

  return (
    <div className=" border-gray-200 bg-gray-100 md:bg-gray-50 md:w-[25%] md:pl-5 md:py-2 flex md:flex-col flex-row items-center md:items-start justify-between">
      <div className="w-full flex flex-col text-sm">
        <div className="w-full flex items-center justify-between border-b md:border-0 p-2">
          <h3 className="uppercase text-sm font-medium md:text-base md:mb-5">
            My Account
          </h3>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl border text-gray-600 p-1.5 block md:hidden"
          >
            <ImMenu />
          </button>
        </div>

        <div className={`${isOpen ? "block " : "hidden md:block"} w-full`}>
          <div
            className={`w-full flex flex-col items-center justify-center md:justify-start md:items-start`}
          >
            {menus.map((menu) => (
              <div
                key={menu.id}
                onClick={() => {
                  setIsOpen(!isOpen), setActive(menu.path);
                }}
                className={`${
                  active === menu.path ? "text-primary" : ""
                } w-full border-b py-5 cursor-pointer hover:text-primary transition-all duration-150 flex items-center gap-2 pl-2`}
              >
                <span className="text-base">{menu.icon}</span>
                {menu.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={handleLogout}
          className="hidden w-max font-medium text-primary hover:text-white hover:bg-primary transition-all duration-200 pr-5 py-1 text-sm rounded-md md:flex items-center gap-1 border"
        >
          <BiLogOutCircle className="text-base" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AcccountNav;
