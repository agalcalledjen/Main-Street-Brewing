import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgBg: {
    height: "100%",
    width: "100%"
  },
  loadingText: {
    color: colors.white
  },
  textContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginTop: 300
  }
});

export default styles;
