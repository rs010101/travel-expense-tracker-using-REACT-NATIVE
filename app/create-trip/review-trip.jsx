import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';


export default function ReviewTrip() {
  const navigation = useNavigation();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: '',
    })
  },[])
  return (
    <View style ={{
      padding: 25,
      backgroundColor: '#fff',
      paddingTop: 75,
      height: '100%'
    }}>
      <Text style ={{
        fontSize: 35,
        fontFamily: 'outfit-bold',
        marginTop: 20
      }}>Review your trip</Text>

      <View style ={{
        marginTop: 20,

      }}>
        <Text style ={{
          fontSize: 20,
          fontFamily: 'outfit-bold',
          color: '#000',
          marginBottom: 20
        }}>Before generating your trip, please review your selection</Text>
{/* destination */}
        <View style ={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Text style ={{
            fontSize: 30
          }}> 📍
          </Text>
          <View style ={{
            fontFamily:'outfit-bold',
            fontSize: 20,
            color: '#f0f0f0',
          }}>
            <Text>Destination</Text>
            <Text style ={{
              // color: '#000',
              fontSize: 15,
              fontFamily:'outfit-medium'
            }}>{tripData?.locationInfo?.name}</Text>
          </View>
        </View>
        
        {/* date selection info */}
        <View style ={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Text style ={{
            fontSize: 29
          }}> 🗓
          </Text>
          <View style = {{
            fontFamily:'outfit-bold',
            fontSize: 20,
          }}>
            <Text>Travel Date</Text>
            <Text style ={{
              fontSize: 15,
              fontFamily:'outfit-medium'
            }}>{moment(tripData?.startDate).format('DD MMM') + 
            " To " 
            + moment(tripData.endDate).format('DD MMM')+ "  "}
            ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        {/* travelers info */}
        <View style ={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Text style ={{
            fontSize: 29
          }}> 🚎
          </Text>
          <View style = {{
            fontFamily:'outfit-bold',
            fontSize: 20,
          }}>
            <Text>Who's Travelling</Text>
            <Text style ={{
              fontSize: 15,
              fontFamily:'outfit-medium'
            }}>{tripData?.traveler?.title}
            </Text>
          </View>
        </View>

        {/* budget info */}
        <View style ={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Text style ={{
            fontSize: 29
          }}> 💰
          </Text>
          <View style = {{
            fontFamily:'outfit-bold',
            fontSize: 20,
          }}>
            <Text>Budget </Text>
            <Text style ={{
              fontSize: 15,
              fontFamily:'outfit-medium'
            }}>{tripData?.budget}
            </Text>
          </View>
        </View>

      </View>

      <TouchableOpacity 
              onPress={()=>router.replace('/create-trip/generate-trip')}
              style = {{
                      backgroundColor: '#000',
                      padding: 20,
                      borderRadius: 15,
                      marginTop: 50
                    }}>
                      
                      <Text style ={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'outfit-medium',
                        
                      }}>
                        Build My Trip
                      </Text>
                      
                    </TouchableOpacity>


    </View>
  )
}