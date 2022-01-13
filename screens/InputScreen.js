import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* First block */}
      <View style={styles.firstBlock}>
        <Text style={{ color: "#fff", fontSize: 32, marginVertical: 20 }}>
          What would you like to focus on ?
        </Text>
        <View style={styles.inputBlock}>
          <TextInput style={styles.input} textAlign="center" />
          <View style={styles.btn}>
            <Text style={{ fontSize: 25, color: "#fff" }}>+</Text>
          </View>
        </View>
      </View>
      {/*Second block  */}
      <View style={styles.secondBlock}>
        <Text style={{ color: "#fff", fontSize: 20 }}>
          Things we have focused on
        </Text>
        <Text style={{ color: "#fff" }}>Not yet</Text>
      </View>
      {/* Third block */}
      <View style={styles.thirdBlock}>
        <View style={styles.clearBtn}>
          <Text style={{ fontSize: 25, color: "#fff" }}>Clear</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221f46",
    padding: 15,
  },
  // First Block
  firstBlock: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  secondBlock: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  thirdBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBlock: {
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    fontSize: 20,
    borderRadius: 5,
  },
  btn: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: "#ffffff",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  clearBtn: {
    width: 90,
    height: 90,
    borderWidth: 3,
    borderColor: "#ffffff",
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
