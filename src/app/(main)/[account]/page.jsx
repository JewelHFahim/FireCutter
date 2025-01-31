"use client";

import { extractUserIdFromToken } from "@/components/private/extractUserIdFromToken";
import { useUserDetailsQuery } from "@/redux/features/users/userApis";
import Cookies from "js-cookie";
import React, { useState } from "react";
import Orders from "@/components/user-account/Orders";
import AccountInfo from "@/components/user-account/AccountInfo";
import PrivateRoute from "@/components/private/PrivateRoute";
import ResetPassword from "@/components/user-account/ResetPassword";
import AcccountNav from "@/components/user-account/AcccountNav";
import OrderDetails from "@/components/user-account/OrderDetails";
import { useLogoutMutation } from "@/redux/features/auth/authApis";
import toast from "react-hot-toast";

const AccountPage = () => {
  const token = Cookies.get("fc_token");
  const [active, setActive] = useState("orders");
  const [orderId, setOrderId] = useState("");
  const userId = extractUserIdFromToken(token);
  const { data: userDetails } = useUserDetailsQuery(userId);

  const renderComponent = () => {
    switch (active) {
      case "orders":
        return <Orders setActive={setActive} setOrderId={setOrderId} />;

      case "account":
        return <AccountInfo />;

      case "reset":
        return <ResetPassword />;

      case "invoice":
        return <OrderDetails orderId={orderId} />;

      default:
        return <Orders />;
    }
  };

  return (
    <PrivateRoute>
      <div className="w-full h-full min-h-[70vh] border border-gray-100 flex flex-col md:flex-row md:mt-5">
        <AcccountNav active={active} setActive={setActive} />

        <div className="md:w-[75%]">{renderComponent()}</div>
      </div>
    </PrivateRoute>
  );
};

export default AccountPage;
