import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Width * 0.99,
    height: Height,
    paddingTop: Height * 0.03,
    paddingHorizontal: Width * 0.03,
    alignItems: "flex-start",
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  TabStyle: {
    fontSize: RFValue(12)
  }
});

export default styles;
