import { createContext, useContext, useState, useEffect } from "react";

// Create a context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [currentUserId,setCurrentUserId] = useState()

  useEffect(() => {
    // Load token from localStorage on initial load
    const storedToken = localStorage.getItem("authToken");
    const storedCurrentUserId = localStorage.getItem("currentUserId");
    if (storedToken) {
      setCurrentUserId(storedToken);
    }
    if (storedCurrentUserId) {
      setToken(storedCurrentUserId);
    }
    setCurrentUserId(storedCurrentUserId)
  }, []);

  const saveTokenInLocalStr = (token) => {
    setToken(token);
    localStorage.setItem("authToken", token);
  };
  
  const LogoutUser = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };
  // const getBlogId = () =>{
    
  // }
  const saveCurrentUserIdInLocalStr =(currentUserId) =>{
    setCurrentUserId(currentUserId);
    localStorage.setItem("currentUserId",currentUserId );
  }

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{ token, saveTokenInLocalStr,saveCurrentUserIdInLocalStr, isLoggedIn, LogoutUser, currentUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
