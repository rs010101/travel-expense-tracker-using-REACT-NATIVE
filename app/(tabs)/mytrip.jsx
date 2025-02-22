import { View, Text, TouchableOpacity, ActivityIndicatorBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { router, useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/firebaseConfigs';
import { ActivityIndicator } from 'react-native';
import UserTripList from '../../components/MyTrips/UserTripList';

export default function MyTrip() {
  const router = useRouter();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(()=>{
    user&&GetMyTrips();
  },[user])

  const GetMyTrips = async()=>{
    
    setUserTrips([]);
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev, doc.data()])
    });
    setLoading(false);
  }

  return (
    <View style = {{
      padding: 25,
      paddingTop: 55,
      backgroundColor: '#fff',
      height: '100%',
    }}>

      <View 
      style= {{
        display:'flex',
        flexDirection:'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 5
      }}
      >
      <Text style = {{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        
      }}>My Trip</Text>
      <TouchableOpacity onPress={() => router.push('create-trip/select-traveler')}><Ionicons name="add-circle" size={40} color="black" /></TouchableOpacity>
      </View>

      {loading&&<ActivityIndicator size={'large'}/>}
      {userTrips?.length == 0?
        <StartNewTripCard/>
        : <UserTripList userTrips={userTrips}/>
      }

    </View>
  )
}