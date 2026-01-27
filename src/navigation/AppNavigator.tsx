import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';
import CustomerHomeScreen from '../screens/customer/CustomerHomeScreen';
import ProviderHomeScreen from '../screens/customer/ProviderHomeScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

// ✅ DEFINE PROPS EXPLICITLY
type AppNavigatorProps = {
  role: 'customer' | 'provider' | null;
};

// ✅ ACCEPT PROPS HERE
const AppNavigator = ({ role }: AppNavigatorProps) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {role === 'provider' ? (
        <Stack.Screen
          name="ProviderHome"
          component={ProviderHomeScreen}
        />
      ) : (
        <Stack.Screen
          name="CustomerHome"
          component={CustomerHomeScreen}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
