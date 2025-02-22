import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { styles } from '../sign-in';
import { Route } from 'expo-router/build/Route';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebaseConfigs';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[]);

  const OnCreateAccount=()=>{

    if(!email&&!password&&!fullName){
      ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      router.replace('/mytrip')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        });
  }

  return (
    <View
    style = {{
      padding:25,
      paddingTop: 50

    }}>
      <Text style = {{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: '#000',
        textAlign: 'center'
      }}>Create New Account</Text>

      {/* Name */}

      <View style = {{
        marginTop: 50
      }}>
        <Text style = {{
          fontFamily: 'outfit'
        }}>
          Full Name
        </Text>
        <TextInput
          style={localStyles.input}
          placeholder='Enter Full Name'
          onChangeText={(value)=> setFullName(value)}
          />
      </View>

      {/* Email */}
      <View style = {{
        marginTop: 30
      }}>
        <Text style = {{
          fontFamily: 'outfit'
        }}>
          Email
        </Text>
        <TextInput
          style={localStyles.input}
          placeholder='Enter Email'
          onChangeText={(value)=> setEmail(value)}
          />
      </View>

      {/* Password */}
        <View style= {{
            marginTop: 30
          }}>
          <Text style = {{
            fontFamily: 'outfit'
            }}>Password</Text>
            <TextInput
            secureTextEntry = {true}
            style = {localStyles.input}
              placeholder = "Enter your password"
              onChangeText={(value)=> setPassword(value)}
              />
          </View>
{/* Create account */}
          <TouchableOpacity onPress={OnCreateAccount}
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
                  }}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                      onPress={()=> router.replace('/auth/sign-in')}
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
                        }}>Sign In</Text>
                      </TouchableOpacity>

    </View>
  )
}

const localStyles = StyleSheet.create({
  input:{
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#000',
    fontFamily: 'outfit'
  }
})
