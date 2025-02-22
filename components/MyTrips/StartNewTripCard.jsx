import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';

export default function StartNewTripCard() {

  const router = useRouter();

  return (
    <View
    style = {{
      padding: 20,
      marginTop: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }}
    >
      <Ionicons name="location-sharp" size={35} color="black" />
      <Text style = {{
        fontSize: 25,
        fontFamily: 'outfit-medium',
        marginTop: 10
      }}>
        No Trips Planned Yet
      </Text>
      <Text style = {{
        fontSize: 20,
        fontFamily: 'outfit',
        marginTop: 10,
        textAlign: 'center',
        color: '#A9A9A9',
        padding: 13
      }}>
        Looks like its time to plan a new travel experience! Get Started below
      </Text>

      <TouchableOpacity
      onPress={()=> router.push('/create-trip/search-place')}
    style={{
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 15,
    paddingHorizontal: 30,
  }}
>
  <Text
    style={{
      color: '#fff',
      fontFamily: 'outfit-medium',
      fontSize: 17,
    }}
  >
    Start a new Trip
  </Text>
</TouchableOpacity>


    </View>
  )
}