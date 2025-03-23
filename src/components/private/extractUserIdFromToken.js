import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const extractUserIdFromToken = (jwt) => {
  const token = Cookies.get("fc_token");
  try {
    const decoded = jwtDecode(token);
    return decoded?.id;
  } catch (error) {
    // console.log("Invalid JWT token", error);
    return null;
  }
};

