import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment';

export default function UserTripList({userTrips}) {

  // const LatestTrip = userTrips[0].tripData;
  // console.log(LatestTrip);
  console.log(userTrips);
  // console.log(userTrips?.[0]); 
  // console.log(userTrips?.[0]?.tripPlan);
  // console.log(userTrips?.[0]?.tripPlan?.travelPlan);
  // console.log(userTrips[0]?.tripPlan?.travelPlan?.location);
  return (
    <View>
      <View style ={{
        marginTop: 20
      }}>
        <Image source={require('./../../assets/images/login.jpg')}
        style ={{
          width: '100%',
          height: 250,
          objectFit: 'cover',
          borderRadius: 15
        }}
        />
        <View style={{
        marginTop: 10
      }}>
        <Text style ={{
          fontSize: 20,
          fontFamily: 'outfit-medium'
        }}>{userTrips[0].tripPlan?.travelPlan?.location || "invalid location"}</Text>
        
      </View>
      </View>
    </View>
  )
}