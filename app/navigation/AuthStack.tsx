import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../../screens/Login";
import SignupScreen from "../../screens/Signup";

const Stack = createNativeStackNavigator();
interface AuthStackProps {
  setUserRole: (role: "admin" | "user" | null) => void;
}
export default function AuthStack({ setUserRole }: AuthStackProps) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} setUserRole={setUserRole} />}
      </Stack.Screen>
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
