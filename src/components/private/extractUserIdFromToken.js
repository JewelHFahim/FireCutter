import { jwtDecode } from "jwt-decode";

export const extractUserIdFromToken = (jwt) => {
  try {
    const decoded = jwtDecode(jwt);
    return decoded?.id;
  } catch (error) {
    console.log("Invalid JWT token", error);
    return null;
  }
};

