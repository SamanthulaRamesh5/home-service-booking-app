import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
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
=======
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
>>>>>>> 5edb4917d014192b845f690914c98c91874d06ec
