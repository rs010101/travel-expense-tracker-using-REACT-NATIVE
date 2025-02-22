import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { use } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebaseConfigs';


export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[]);

  const onSignIN=()=>{

    if(!email&&!password){
      ToastAndroid.show('Please Enter Email & Password ', ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    if(errorCode=='auth/invalid-credential'){
      ToastAndroid.show('Invalid Credentials', ToastAndroid.LONG);
    }
  });
  }

  return (
    <View style = {{
      padding: 25,
      paddingTop: 80,
      height: '100%',
      backgroundColor: '#fff',
    }}>

      <Text style= {{
        fontSize: 30,
        fontFamily: 'outfit-bold',
      }}>Let's Sign You In</Text>

      <Text style= {{
        fontSize: 30,
        fontFamily: 'outfit',
        color: '#000',
        marginTop: 20
      }}>Welcome Back</Text>

      <Text style= {{
        fontSize: 20,
        fontFamily: 'outfit',
        color: '#000',
        marginTop: 10
      }}>You've been missed!</Text>
      {/* Email */}
      <View style= {{
        marginTop: 50
      }}>
        <Text style = {{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email'
         onChangeText={(value)=>setEmail(value)}
         />
      </View>
      {/* Password */}

      <View style= {{
        marginTop: 20
      }}>
        <Text style = {{
          fontFamily: 'outfit'
        }}>Password</Text>
        <TextInput
        secureTextEntry= {true}
        style={styles.input}
         placeholder='Enter Password'
         onChangeText={(value)=>setPassword(value)}
         />
         <TextInput />
      </View>
      {/* Sign In Button */}
      <TouchableOpacity onPress={onSignIN}
      style= {{
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 15,
        marginTop: 40
      }}>
        <Text style = {{
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'outfit-bold',
          fontSize: 15
        }}>Sign In</Text>
      </TouchableOpacity>


      {/* Create Account Button */}
      <TouchableOpacity
      onPress={()=> router.replace('/auth/sign-up')}
      style= {{
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1
      }}>
        <Text style = {{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'outfit-bold',
          fontSize: 15,
        }}>Create Account</Text>
      </TouchableOpacity>

    </View>
  )
}

export const styles = StyleSheet.create({
  input:{
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#000',
    fontFamily: 'outfit'
  }
})