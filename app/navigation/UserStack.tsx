import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../../screens/HomeScreen";


const Tab = createBottomTabNavigator();
interface AuthStackProps {
  setUserRole: (role: "admin" | "user" | null) => void;
}

export default function UserStack({ setUserRole }: AuthStackProps) {
  return (
    <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
    
     
    </Tab.Navigator>
  );
}
