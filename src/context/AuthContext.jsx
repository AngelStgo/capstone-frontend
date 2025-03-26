import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const storedAuthData = JSON.parse(localStorage.getItem("authData"));
    if (storedAuthData) {
      setAuthData(storedAuthData); // Rehydrate state with stored data
    }
  }, []);

  const login = (data) => {
    setAuthData(data);  // Save user data in context
    localStorage.setItem("authData", JSON.stringify(data));  // Save token in localStorage
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("authData");  // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

