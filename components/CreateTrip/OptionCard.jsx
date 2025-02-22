import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({option, selectedOption}) {
  return (
    <View style = {[{
      padding: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#f2f2f2',
      borderRadius: 15,
    }, selectedOption?.id == option?.id && {borderWidth: 3}]}>
      <View>
        <Text style= {{
          fontSize: 19,
          fontFamily: 'outfit-bold',
        }}>{option.title}</Text>
        <Text style= {{
          fontSize: 16,
          fontFamily: 'outfit',
          color: '#808080'
        }}>{option.desc}</Text>
      </View>
      
    </View>
  )
}