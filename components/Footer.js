import { StyleSheet, View, Text } from "react-native";
import ZapButton from "./ZapButton";

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.buttons}>
        <ZapButton
          label="Não Lembrei"
          color="#f33"
          onPress={() => {
            alert("aaa");
          }}
        />
        <ZapButton
          label="Quase Não Lembrei"
          color="#ed2"
          onPress={() => {
            alert("bbb");
          }}
        />
        <ZapButton
          label="Zap!"
          color="#3a3"
          onPress={() => {
            alert("ccc");
          }}
        />
      </View>
      <View style={styles.progress}>
        <Text style={styles.label}>Quantidade de Acertos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#eed",
    width: "100%",
    height: 180,
    marginTop: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },
  buttons: {
    height: 90,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  progress: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    color: "#222",
  },
});
