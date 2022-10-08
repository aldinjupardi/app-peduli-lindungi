import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  logo_bumn,
  logo_kemenkes,
  logo_kominfo,
  logo_kpcpen,
  LogoSplash,
} from "../../assets";
const windowHeight = Dimensions.get("window").height;

export default SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.imgContainer}>
        <Image source={LogoSplash} style={styles.imgStyle} />
      </View>
      <View style={styles.container}>
        <Text style={styles.footherText}>Bekerjasama Dengan :</Text>
      </View>
      <View style={styles.imgStyle2}>
        <Image source={logo_kpcpen} style={styles.imgSize} />
        <Image source={logo_kominfo} style={styles.imgSize} />
        <Image source={logo_kemenkes} style={styles.imgSize} />
        <Image source={logo_bumn} style={styles.imgSize} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
  },
  container: {
    margin: 40,
  },
  imgStyle: {
    marginTop: windowHeight / 3,
    marginBottom: 10,
    resizeMode: "contain",
    height: 80,
  },
  imgStyle2: {
    flexDirection: "row",
    marginRight: 30,
    marginLeft: 40,
  },
  imgSize: {
    width: null,
    resizeMode: "contain",
    height: 50,
    margin: 0,
    flex: 1,
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
  },
  bodyText: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 16,
  },
  footherText: {
    marginTop: 250,
    fontSize: 16,
    marginBottom: 0,
  },
});