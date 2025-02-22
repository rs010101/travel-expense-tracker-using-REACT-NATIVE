import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    })
  }, [])

  const onDateChange = (date, type)=>{
    console.log(date, type);
    if(type == 'START_DATE'){
      setStartDate(moment(date))
    }else{
      setEndDate(moment(date))
    }
  }
  const OnDateSelectionContinue = ()=>{
    if(!startDate && !endDate){
      ToastAndroid.show('Please Select Start and End Date', ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, 'days');
    console.log(totalNoOfDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1
    });

    router.push('/create-trip/select-budget')
    
  }
  return (
    <View style ={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: '#f0f0f0',
      height: '100%'
    }}>
      <Text style ={{
        fontSize: 35,
        fontFamily: 'outfit-bold',
        marginTop: 20
      }}>Travel Dates</Text>

      <View style ={{
        marginTop: 30,

      }}>
      <CalendarPicker onDateChange={onDateChange}
      allowRangeSelection = {true}
      minDate={new Date()}
      maxRangeDuration={5}
      selectedRangeStyle= {{
        backgroundColor: '#808080',
      }}
      selectedDayTextStyle = {{
        color: '#000'
      }}
      />
      </View>
      <TouchableOpacity
      onPress={OnDateSelectionContinue}
       style ={{
        padding:15,
        backgroundColor: '#000',
        borderRadius: 15,
        marginTop: 35

      }}>
        
        <Text style ={{
          textAlign: 'center',
          color: '#fff',
          fontFamily: 'outfit-medium',
          fontSize: 20
        }}>Continue</Text>
        
      </TouchableOpacity>
    </View>
  )
}