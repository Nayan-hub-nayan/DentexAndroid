import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AdminDashboard({ setUserRole }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Admin</Text>
      <TouchableOpacity style={styles.logout} onPress={() => setUserRole(null)}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  logout: { marginTop: 20, backgroundColor: "#ff4d4d", padding: 10, borderRadius: 8 },
  logoutText: { color: "#fff", fontWeight: "bold" },
});
