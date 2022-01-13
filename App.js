import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import InputScreen from "./screens/InputScreen";
import TimerScreen from "./screens/TimerScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TimerScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
