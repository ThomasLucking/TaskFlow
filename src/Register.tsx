import React, { useState } from 'react';
import { Pressable, Image, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import FontAwesome from "react-native-vector-icons/Entypo";
import FontAwesome2 from "react-native-vector-icons/FontAwesome";

const Register = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState(''); // Fixed: was boolean, should be string
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleName(text: string) {
    setName(text);
    setNameVerify(false);

    if (text.length > 1) {
      setNameVerify(true);
    }
  }

  function handleEmail(text: string) {
    setEmail(text);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(text)) {
      setEmailVerify(true);
    }
  }

  function handlePassword(text: string) {
    setPassword(text);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(text)) {
      setPasswordVerify(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.logo} source={require('/Users/thomaslucking/Desktop/TaskflowV2/src/img/appiconidk.png')} />
        <MaskedView
          maskElement={
            <Text style={styles.title}>
              Create Account
            </Text>
          }
        >
          <LinearGradient colors={['#5b1ec5', '#2d59d6']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Text style={[styles.title, { opacity: 0 }]}>
              Create Account
            </Text>
          </LinearGradient>
        </MaskedView>
        <Text style={styles.subtitle}>Join us to get started!</Text>
        <View style={styles.inputcontainer}>
          <FontAwesome name="email" size={25} color="#aaaaaa" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleEmail} // Fixed: use onChangeText
            autoCapitalize="none"
            placeholderTextColor="#aaaaaa"
            value={email}
          />
        </View>
        <View style={styles.inputcontainer}>
          <FontAwesome2 name="lock" size={25} color="#aaaaaa" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={handlePassword}
            placeholderTextColor="#aaaaaa"
            value={password}
          />
        </View>
        <Pressable style={styles.registerbutton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registertext}>Register</Text>
        </Pressable>
        <Text style={styles.registertext2}>Already have an account? Click here to</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerbutton2}>Login</Text>
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
    color: 'white',
  },
  inputcontainer: {
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

  registerbutton: {
    alignItems: "center",
    width: '100%',
    backgroundColor: "#5b34db",
    padding: 9,
    borderRadius: 12,
    marginTop: 40

  },
  registertext: {
    alignContent: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",

  },
  registertext2: {
    alignContent: "center",
    color: "white",
    fontWeight: "bold",
    right: 25

  },
  subtitle: {
    color: "lightgray",
    fontWeight: "bold",
    fontSize: 15,
    bottom: 13,

  }, 
  registerbutton2:{
    color: "#13a8ed",
    fontWeight: "bold",
    left: 130,
    bottom: 17,

  }
});

export default Register;