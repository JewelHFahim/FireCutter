"use client";

import CheckoutNavbar from "@/components/checkouts/CheckoutNavbar";
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "react-hot-toast";

export default function CheckoutLayout({ children }) {
  return (
    <ReduxProvider>
      <CheckoutNavbar />
      <div className="sm:ml-[10vw] px-4 sm:px-0 sm:w-[80vw] mx-auto lg:px-0">
        {children}
        <Toaster />
      </div>
    </ReduxProvider>
  );
}
