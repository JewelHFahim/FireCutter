"use client";

import React, { useState } from "react";
import Orders from "@/components/user-account/Orders";
import AccountInfo from "@/components/user-account/AccountInfo";
import PrivateRoute from "@/components/private/PrivateRoute";
import ResetPassword from "@/components/user-account/ResetPassword";
import AcccountNav from "@/components/user-account/AcccountNav";
import OrderDetails from "@/components/user-account/OrderDetails";

const AccountPage = () => {
  const [active, setActive] = useState("orders");
  const [orderId, setOrderId] = useState("");

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
