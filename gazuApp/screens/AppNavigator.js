import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Home from "./Home";
import ProfileScreen from "./ProfileScreen"
import HomeScreen from './HomeScreen';
import RecentScreen from './RecentScreen';
import SettingScreen from './SettingScreen';
import PaymentScreen from './PaymentScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = ()=> {
return (
<Stack.Navigator initialRouteName="home">
   <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="payment"
            component={PaymentScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="setting"
            component={SettingScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="recent"
            component={RecentScreen}
            options={{ headerShown: false }}
          />
  
  </Stack.Navigator>
)

}



export default AppNavigator
