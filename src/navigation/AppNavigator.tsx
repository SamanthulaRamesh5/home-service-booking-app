import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerHomeScreen from '../screens/customer/CustomerHomeScreen';
import ProviderHomeScreen from '../screens/customer/ProviderHomeScreen';
import { UserRole } from '../constants/role';
    
const Stack = createNativeStackNavigator();

const AppNavigator = ({ role }: { role: UserRole | null }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CustomerHome" component={CustomerHomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProviderHome" component={ProviderHomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppNavigator;