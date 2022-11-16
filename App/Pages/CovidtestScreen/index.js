    import * as React from "react";
    import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    } from "react-native";
    import { MaterialCommunityIcons } from '@expo/vector-icons';
    import {
    logo_bumn,
    LogoKemenkes,
    LogoKominfo,
    LogoKpc,
    logo_top,
    logo_kpcpen,
    logo_kominfo,
    logo_kemenkes,
    ic_empty,
    } from "../../assets";
    import { PrimaryButton } from "../../Componets";
    const windowHeight = Dimensions.get("window").height;

    export default SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.bgApp}>
            <View>
                <Text style={styles.tekscovid}>COVID -19 Test Results</Text>
            </View>

            <View style={styles.imgContainer}>
                <Image source={ic_empty} style={styles.imgStyle} />
                <Text>You do not have a history of COVID-19 test</Text>
                <Text>results. Make sure you do a COVID-19 tes at a laboratory</Text>
                <Text>affiliated with the Ministry of Health: PCR test lab</Text>
                <Text>or Antigen test lab</Text>
            </View>
            </View>
        );
    };

    const styles = StyleSheet.create({
        bgApp: {
        flex: 1,
        backgroundColor: "white",
        },
        imgContainer: {
        alignItems: "center",
        },
        container: {
        margin: 40,
        },
        imgStyle: {
        marginTop: windowHeight / 5,
        marginBottom:20,
        height: 300,
        width: 300,
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
        footerText: {
        marginTop: 100,
        fontSize: 16,
        marginBottom: 0,
        },
        customeButton: {
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        },
        tekscovid: {
            fontWeight: "bold",
            fontSize: 20,
            marginTop: windowHeight / 17,
            marginLeft: 50,
        },
    });
