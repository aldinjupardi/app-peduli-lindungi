import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import {
  logo_bumn,
  LogoKemenkes,
  LogoKominfo,
  LogoKpc,
  logo_top,
  logo_kpcpen,
  logo_kominfo,
  logo_kemenkes,
} from "../../assets";
import { PrimaryButton } from "../../Componets";

const windowHeight = Dimensions.get("window").height;

export default SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.imgContainer}>
        <Image source={logo_top} style={styles.imgStyle} />
      </View>
      <View>
        <TextInput
          style={styles.Input}
          placeholder="Tulis Email Anda @gmail.com"
        />
        <TextInput
          style={styles.InputPass}
          placeholder="Masukkan Password Anda"
        />
        <PrimaryButton
          title="Login"
          style={styles.customeButton}
          onPress={() => navigation.navigate("SplashScreen")}
        />
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
    marginTop: windowHeight / 8,
    marginBottom:20,
  },
  Input: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  InputPass: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginTop: 20,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
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
    marginTop: 90,
    fontSize: 16,
    marginBottom: 0,
  },
  customeButton: {
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },
});