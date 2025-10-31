import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AdminDashboard from "../../screens/AdminDashboard";

const Stack = createNativeStackNavigator();
interface AuthStackProps {
  setUserRole: (role: "admin" | "user" | null) => void;
}

export default function AdminStack({ setUserRole }: AuthStackProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdminDashboard">
        {(props) => <AdminDashboard {...props} setUserRole={setUserRole} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
