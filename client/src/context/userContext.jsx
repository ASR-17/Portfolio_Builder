import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Provider component
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

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Example component using the context
const UserProfile = () => {
  const { userEmail, login, logout } = useUser();

  return (
    <div>
      {userEmail ? (
        <>
          <p>Logged in as: {userEmail}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={() => login("user@example.com")}>Login as user@example.com</button>
        </>
      )}
    </div>
  );
};

// Example app with provider wrapping components
const App = () => (
  <UserProvider>
    <UserProfile />
  </UserProvider>
);

export default App;
