import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import ProfileScreen from "./ProfileScreen"

const Stack = createNativeStackNavigator();

const AppNavigator = ()=> {
return (
<Stack.Navigator initialRouteName="home">
   <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
  
  </Stack.Navigator>
)

}



export default AppNavigator
