import { StyleSheet, Text, View } from "react-native";
// import CardComponent from "../components/CardComponent";

export default function HomeScreen({ navigation }) {
  const cards = [
    { id: "1", title: "About Us", image: "https://via.placeholder.com/150", route: "About" },
    { id: "2", title: "Profile", image: "https://via.placeholder.com/150", route: "Profile" },
  ];

  return (
    <View style={styles.container}>
        <Text>Home TextEntry </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
