import { StyleSheet, View, Text } from "react-native";
import ZapButton from "./ZapButton";
import { ScoreContext } from "../contexts/ScoreContext";
import { useContext } from "react";
import { ButtonContext } from "../contexts/ButtonContext";

export default function Footer() {
  const { score, updateScore, deckTheme } = useContext(ScoreContext);
  const { buttonsState, deactivateButtons } = useContext(ButtonContext);

  return (
    <View style={styles.footerContainer}>
      {!buttonsState.visibility ? (
        <View style={styles.label}>{deckTheme}</View>
      ) : (
        <View style={styles.buttons}>
          <ZapButton
            label="Não Lembrei"
            color={buttonsState.active === true ? "#f33" : "#aaa"}
            onPress={() => {
              if (buttonsState.active === true) {
                alert("Que Pena!");
                deactivateButtons();
              }
            }}
          />
          <ZapButton
            label="Quase Não Lembrei"
            color={buttonsState.active === true ? "#ed2" : "#aaa"}
            onPress={() => {
              if (buttonsState.active === true) {
                alert("Quase!");
                deactivateButtons();
              }
            }}
          />
          <ZapButton
            label="Zap!"
            color={buttonsState.active === true ? "#3a3" : "#aaa"}
            onPress={() => {
              if (buttonsState.active === true) {
                alert("Parabéns!");
                deactivateButtons();
                updateScore();
              }
            }}
          />
        </View>
      )}
      <View style={styles.progress}>
        <Text style={styles.label}>
          Quantidade de Acertos: {score.right} / {score.total}
        </Text>
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
    fontSize: 22,
    color: "#222",
  },
});
