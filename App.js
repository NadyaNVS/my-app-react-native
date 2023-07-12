import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TodoApp from "./screen/TodoApp";

export default function App() {
  console.log("App component rendered");
  return (
    <View style={styles.container}>
      <TodoApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
