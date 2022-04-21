import React, { createContext } from "react";
import Usefirebase from "../Hooks/Usefirebase";

export const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const AllContext = Usefirebase();
  return <MyContext.Provider value={AllContext}>{children}</MyContext.Provider>;
};

export default AuthProvider;
