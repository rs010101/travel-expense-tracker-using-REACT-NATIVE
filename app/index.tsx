import { Text, View } from "react-native";
import Login from './../components/Login'
import {auth} from './../configs/firebaseConfigs'
import { Redirect } from "expo-router";
export default function Index() {
  
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user?
      <Redirect href={'C:/Users/radhi/travel-expense-tracker/app/(tabs)/mytrip.jsx'} />:
      <Login/>
      }
    
    </View>
  );
}
