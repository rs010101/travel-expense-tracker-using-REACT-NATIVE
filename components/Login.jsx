import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useRoute } from '@react-navigation/native'
import { router, useRouter } from 'expo-router';

export default function Login() {
  const router  = useRouter();
  return (
    <View>
      
      <View style = {styles.container}>
        <Image source={require('./../assets/images/login.jpg')} 
        style = {{
          width: '100%',
          height: 530
        }}
        />
        <Text style= {{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          marginTop: 15,
          textAlign: 'center',

        }}>Travel Expense Tracker</Text>
        <Text style = {{
          fontFamily: 'outfit',
          fontSize: 18,
          textAlign: 'center',
        }}>Effortlessly track and manage your travel expenses with our intuitive Travel Expense Tracker </Text>
      
      <TouchableOpacity style= {styles.button}
      onPress={() => router.push('/auth/sign-in')}>
      
        <Text style= {{color: "#fff",
          textAlign: 'center',
          fontFamily: 'outfit-medium',
          fontSize: 17,

        }}>Get Started</Text>
      </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container :{
      backgroundColor: Colors.WHITE,
      marginTop: -10,
      marginBottom: -10,
      height: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 12
   },
   button:{
    padding: 14,
    backgroundColor: '#000',
    borderRadius: 99,
    marginTop: '6%',

   } 
})
