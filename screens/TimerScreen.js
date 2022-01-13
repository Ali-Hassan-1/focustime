import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.timeSection}>
        <Timer />
        <Text style={{ color: "#fff", marginBottom: 10, marginTop: 40 }}>
          Focusing on:{" "}
        </Text>
        <Text style={{ color: "#fff" }}>Moving the lawn</Text>
      </View>
      {/* Time btns */}
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Text style={{ fontSize: 25, color: "#fff" }}>10</Text>
        </View>
        <View style={styles.btn}>
          <Text style={{ fontSize: 25, color: "#fff" }}>20</Text>
        </View>
        <View style={styles.btn}>
          <Text style={{ fontSize: 25, color: "#fff" }}>30</Text>
        </View>
      </View>
      {/* Start and pause */}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.startBtn}>
          <Text style={{ fontSize: 25, color: "#fff" }}>Start</Text>
        </View>
        <View style={styles.btn}>
          <Text style={{ fontSize: 25, color: "#fff" }}>-</Text>
        </View>
      </View>
    </View>
  );
}

const Timer = () => (
  <CountdownCircleTimer
    isPlaying={true}
    duration={50}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
  </CountdownCircleTimer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221f46",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  timeSection: {
    alignItems: "center",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderColor: "#ffffff",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  startBtn: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "#ffffff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 50,
  },
});
