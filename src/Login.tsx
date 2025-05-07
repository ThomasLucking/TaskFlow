import React from 'react';
import { Image, View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.logo} source={require('/Users/thomaslucking/Desktop/TaskflowV2/src/img/appiconidk.png')} />
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.usernamecontainer}>
          <FontAwesome name="lock" size={35} color="#aaaaaa" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#aaaaaa"
          />
        </View>
        <View style={styles.passwordcontainer}>
          <FontAwesome name="user" size={35} color="#aaaaaa" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#aaaaaa"
          />
        </View>
        <Pressable style={styles.login} onPress={() => navigation.navigate('Home')} >
          <Text style={styles.logintext}>Sign In</Text>
        </Pressable>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#080836",
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
  input: {
    alignItems: "center",
    width: '100%',
    height: 40,
    borderColor: '#303158',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#1a1b45",
    color: "white",
  },
  logo: {
    height: 120,
    width: 120,
  },
  login: {
    alignItems: "center",
    width: '100%',
    backgroundColor: "#5b34db",
    padding: 9,
    borderRadius: 12,
    top: 40
  },
  logintext: {
    alignContent: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",












  }
});

export default Login;