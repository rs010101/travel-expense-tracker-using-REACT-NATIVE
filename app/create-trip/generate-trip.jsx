import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import { auth, db} from './../../configs/firebaseConfigs'
import { doc, setDoc } from 'firebase/firestore';

export default function GenerateTrip() {
  const {tripData, setTripData} = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(()=>{
    GenerateAiTrip()
  },[])

  const GenerateAiTrip =async()=>{
    setLoading(true);

    const FINAL_PROMP = AI_PROMPT.replace('{location}', tripData?.locationInfo?.name)
    .replace('{totalDays}', tripData.totalNoOfDays)
    .replace('{totalNight}', tripData.totalNoOfDays - 1)
    .replace('{traveler}', tripData.traveler?.title)
    .replace('budget', tripData.budget)
    .replace('{totalDays}', tripData.totalNoOfDays)
    .replace('{totalNight}', tripData.totalNoOfDays - 1);

    console.log(FINAL_PROMP);

  const result = await chatSession.sendMessage(FINAL_PROMP);
  console.log(result.response.text());
    setLoading(false)


  const docId = (Date.now()).toString();
  await setDoc(doc(db, "UserTrips", docId),{
    userEmail: user.email,
    tripPlan: JSON.parse(result.response.text()),
    tripData: JSON.stringify(tripData),
    docId: docId
  })
  
  //const docId = (Date.now()).toString();
  // const result_ = await setDoc(doc(db, "UserTrips",docId),{
  //   // userEmail: user.email,
  //   // tripPlan: tripRes,
  //   // tripData:JSON.stringify(tripData),
  //   // docId: docId
  // })
  router.push('(tabs)/mytrip');

  }
  return (
    <View style ={{
      padding:25,
      paddingTop: 75,
      backgroundColor: '#fff',
      height: '100%'
    }}>
      <Text style ={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        textAlign: 'center'
      }}>Please Wait...</Text>
      <Text style ={{
        fontSize: 20,
        fontFamily: 'outfit-medium',
        textAlign: 'center',
        marginTop: 35
      }}>We are working to generate your dream trip</Text>

      <Image source = {require('./../../assets/images/plane.gif')}
      style={{
        width: '100%',
        height: 400,
        marginTop: 80,
        objectFit: 'contain'
      }}
      />

      <Text style ={{
        fontFamily: 'outfit-bold',
        fontSize:20,
        textAlign:'center',
        color :'#a9a9a9'
      }}>Do not Go Back</Text>
    </View>
  )
}