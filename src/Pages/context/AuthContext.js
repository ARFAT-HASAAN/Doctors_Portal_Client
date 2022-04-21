import { useContext } from "react";
import { MyContext } from "./AuthProvider";

const UseAuth = () => {
  return useContext(MyContext);
};

export default UseAuth;
