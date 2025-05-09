import React from 'react';
import { Image, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';


const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.logo} source={require('/Users/thomaslucking/Desktop/TaskflowV2/src/img/appiconidk.png')} />
        <MaskedView
          maskElement={
            <Text style={styles.title}>
              Welcome Back
            </Text>
          }
        > 
          <LinearGradient colors={['#5b1ec5', '#5145e2', '#2d59d6']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Text style={[styles.title, { opacity: 0 }]}>
              Welcome Back
            </Text>
          </LinearGradient>
        </MaskedView>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={25} color="#aaaaaa" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#aaaaaa"
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={25} color="#aaaaaa" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#aaaaaa"
          />
        </View>

        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}
          <Pressable style={styles.login} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.logintext}>Sign In</Text>
          </Pressable>
        {/* </LinearGradient> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#060532",
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
    bottom: 71
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#5d32d9",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#303158',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#1a1b45",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "white",
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  login: {
    alignItems: "center",
    width: '100%',
    backgroundColor: "#5b34db",
    padding: 9,
    borderRadius: 12,
    marginTop: 40
  },
  logintext: {
    alignContent: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: "100%"
  },
});

export default Login;