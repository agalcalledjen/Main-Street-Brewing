import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: Dimensions.get("window").width * 0.6
  },

  title: {
    color: colors.white,
    fontFamily: fonts.secondary,
    fontSize: fonts.xxl,
    paddingLeft: 20
  },
  beer: {
    marginTop: 20,
    marginBottom: 20
  },
  textContainer: {
    marginTop: 20
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primarySemi,
    fontSize: fonts.md,
    alignSelf: "center"
  }
});

export default styles;
