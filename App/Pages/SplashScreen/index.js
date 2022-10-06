import * as React from 'react';
import {View, Text, StyleSheet, Image, Dimensions  } from 'react-native';
import { LogoSplash } from '../../assets';
const windowHeight = Dimensions.get('window').height;



export default SplashScreen = ({navigation}) => {
  return (
    
      <View style={styles.bgMainApp}>
      <View style={styles.imgContainer}>
        <Image source={LogoSplash} style={styles.imgStyle}/>
      </View>

       

        <Text style={styles.footherText}>Already have an account? Sign In</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    flex: 1,
  },
  imgContainer:{
    alignItems:'center'
  },
  container:{
    margin:40
  },
  imgStyle:{
    marginTop: windowHeight / 10,

  },
  headerText:{
    fontFamily: 'Poppins-SemiBold',
    textAlign:'left',
    fontSize:30,
    fontWeight:'bold'
  },
  bodyText:{
    marginTop:10,
    marginBottom:50,
    fontFamily: 'Poppins-Medium',
    fontSize:16,
  },
  footherText:{
    textAlign:'center',
    marginTop:50,
    fontFamily: 'Poppins-Medium',
    fontSize:16,
  }
});
