import { Pressable, StyleSheet, View, Text } from "react-native";

export default function ZapButton({ label, color, onPress }) {
  return (
    <View sytle={styles.buttonContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 70,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 5,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
