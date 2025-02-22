import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { FlatList } from 'react-native';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {

  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  }, []);

  useEffect(()=>{
    setTripData({
      ...tripData,
      budget: selectedOption?.title
    })
  },[selectedOption])
  const onClickContinue=()=>{
    if(!selectedOption){
      ToastAndroid.show('Select Your Budget', ToastAndroid.LONG);
      return;
    }
    router.push('/create-trip/review-trip');
  }
  return (
    <View style= {{
      paddingTop: 75,
      padding: 25,
      height: '100%',
      backgroundColor: '#fff'
    }}>
      <Text style ={{
        fontSize: 35,
        fontFamily: 'outfit-bold',
        marginTop: 20
      }}>Budget</Text>

      <View style = {{
        marginTop: 20
      }}>

        <Text style = {{
          fontSize: 18,
          fontFamily: 'outfit-medium',
        }}>Choose spending habits for your trip</Text>

        <FlatList
        data={SelectBudgetOptions}
        renderItem={({item, index})=>(
          <TouchableOpacity style = {{
            marginVertical: 10
          }}
          onPress={()=> setSelectedOption(item)}
          >
            <OptionCard option={item} selectedOption={setSelectedOption}></OptionCard>
            </TouchableOpacity>
        )}
        />
        
        </View>
        
        <TouchableOpacity 
        onPress={()=> onClickContinue()}
        style = {{
                backgroundColor: '#000',
                padding: 20,
                borderRadius: 15,
                marginTop: 20
              }}>
                
                <Text style ={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'outfit-medium',
                  
                }}>
                  Continue
                </Text>
                
              </TouchableOpacity>

    </View>
  )
}