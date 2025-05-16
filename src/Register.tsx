import React, { useState } from 'react';
import {Pressable, Image, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';


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
        <View style={styles.inputcontainer}>
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
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={handlePassword}
            placeholderTextColor="#aaaaaa"
            value={password}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerbutton}>Register</Text>
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
    color: "#13a8ed",
    left: 129,
    bottom: 6.4,
    fontWeight: "bold",

  }
});

export default Register;