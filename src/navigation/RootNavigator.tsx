import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import CustomerHomeScreen from '../screens/customer/CustomerHomeScreen';
import ProviderHomeScreen from '../screens/customer/ProviderHomeScreen';

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
          name="CustomerHome"
          component={CustomerHomeScreen}
        />
      ) : (
        <Stack.Screen
          name="ProviderHome"
          component={ProviderHomeScreen}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
