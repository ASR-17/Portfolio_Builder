import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem("userEmail") || null);

  const login = (email) => {
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem("userEmail");
  };

  return (
    <UserContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
