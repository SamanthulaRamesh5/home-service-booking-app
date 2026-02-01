import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import ProviderNavigator from './ProviderNavigator';
import CustomerBookingNavigator from './CustomerBookingNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { session, loading, role } = useAuth();

  // ⏳ Still loading auth or role
  if (loading || (session && !role)) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 🔐 NOT LOGGED IN
  if (!session) {
    return <AuthNavigator />;
  }

  // ✅ LOGGED IN + ROLE READY
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {role === 'customer' ? (
        <Stack.Screen
          name="CustomerStack"
          component={CustomerBookingNavigator}
        />
      ) : (
        <Stack.Screen
          name="ProviderHome"
          component={ProviderNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
