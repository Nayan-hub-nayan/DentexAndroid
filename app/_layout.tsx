import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import 'react-native-reanimated';
import { AuthProvider } from "../context/AuthContext";
import AdminStack from "./navigation/AdminStack";
import AuthStack from "./navigation/AuthStack";
import UserStack from "./navigation/UserStack";


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  
  const colorScheme = useColorScheme();
  const [userRole, setUserRole] = useState<"admin" | "user" | null>(null); // 'admin' or 'user'

  return (
<AuthProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* ❌ Remove NavigationContainer — Expo Router already provides it */}
      
      {userRole === null ? (
        <AuthStack setUserRole={setUserRole} />
      ) : userRole === "admin" ? (
        <AdminStack setUserRole={setUserRole} />  // Replace with <AdminStack /> when ready
      ) : (
        <UserStack setUserRole={setUserRole} />  // Replace with <UserStack /> when ready
      )}
      
      <StatusBar style="auto" />
    </ThemeProvider>
    </AuthProvider>
  );
}
