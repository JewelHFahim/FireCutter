"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import Loader from "@/utils/loader/Loader";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("fc_token");
    if (!token) {
      // Redirect to login with the current route as `next`
      router.push(`/users/login?next=${encodeURIComponent(pathname)}`);
    } else {
      setIsLoading(false);
    }
  }, [router, pathname]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center min-h-[60vh]">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
