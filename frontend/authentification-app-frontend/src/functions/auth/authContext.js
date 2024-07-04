import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(null)
  const [userEmail, setUserEmail] = useState(null)

  const login = (userToken, usermail) => {
    setIsAuthenticated(true)
    setToken(userToken)
    setUserEmail(usermail)
  };

  const logout = () => {
    setIsAuthenticated(false)
    setToken(null)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
