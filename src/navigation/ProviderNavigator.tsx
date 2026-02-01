import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProviderBookingsScreen from '../screens/provider/ProviderBookingsScreen';

const Stack = createNativeStackNavigator();

const ProviderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProviderBookings"
        component={ProviderBookingsScreen}
        options={{ title: 'Bookings' }}
      />
    </Stack.Navigator>
  );
};

export default ProviderNavigator;
