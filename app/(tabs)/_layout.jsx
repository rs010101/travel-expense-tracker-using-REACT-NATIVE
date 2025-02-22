import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1abc9c',
    }}>
      <Tabs.Screen name="mytrip" 
      options={{
        tabBarLabel: 'My Trip',
        tabBarIcon:({color})=><Ionicons name="location-sharp" 
        size={24} color ='#000' />
      }}
      />
      <Tabs.Screen name="discover" 
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon:({color})=><Feather name="globe" size={24} color="black" />
      }}
      />
      <Tabs.Screen name="profile" 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color="black" />
      }}
      />
    </Tabs>
  )
}