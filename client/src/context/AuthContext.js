import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// auth context created
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/me", {
          withCredentials: true,
        });

        setUser(response.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
