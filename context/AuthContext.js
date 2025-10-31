import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const TOKEN_KEY = "auth_token";
  const USER_KEY = "user_data";

  // 🔹 Load saved data when app starts
  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
        const storedUser = await AsyncStorage.getItem(USER_KEY);

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error loading auth data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAuthData();
  }, []);

  // 🔹 Save token and user
  const saveAuthData = async (userData, tokenValue) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, tokenValue);
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
    } catch (error) {
      console.error("Error saving auth data:", error);
    }
  };

  // 🔹 Login
  const login = async (email, password) => {
    try {
      // 🧩 Dummy local auth logic (replace with API later)
      if (email === "nayan@admin.com" && password === "123") {
        const userData = { email, role: "admin" };
        const tokenValue = "admin_token";
        setUser(userData);
        setToken(tokenValue);
        await saveAuthData(userData, tokenValue);
        return true;
      } else if (email === "nayan@user.com" && password === "123") {
        const userData = { email, role: "user" };
        const tokenValue = "user_token";
        setUser(userData);
        setToken(tokenValue);
        await saveAuthData(userData, tokenValue);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // 🔹 Logout
  const logout = async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      await AsyncStorage.removeItem(USER_KEY);
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔹 Hook to access context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
