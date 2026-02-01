import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerHomeScreen from '../screens/customer/CustomerHomeScreen';
import ServiceListScreen from '../screens/customer/ServiceListScreen';
import ServiceDetailScreen from '../screens/customer/ServiceDetailScreen';
import CreateBookingScreen from '../screens/customer/CreateBookingScreen';
import BookingStatusScreen from '../screens/customer/BookingStatusScreen';
import { CustomerBookingStackParamList } from './types';

const Stack = createNativeStackNavigator<CustomerBookingStackParamList>();

const CustomerBookingNavigator = () => {
    console.log("CustomerBookingNavigator rendered",ServiceListScreen);
    console.log("CustomerBookingNavigator rendered CreateBookingScreen",CreateBookingScreen);
    console.log("CustomerBookingNavigator rendered BookingStatusScreen",BookingStatusScreen);
    console.log("CustomerBookingNavigator rendered ServiceDetailsScreen",ServiceDetailScreen);
    console.log("CustomerBookingNavigator rendered CustomerHomeScreen",CustomerHomeScreen);
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen
       name="CustomerHome"
       component={CustomerHomeScreen}
     />
     <Stack.Screen
       name="Services"
       component={ServiceListScreen}
     />
     <Stack.Screen
       name="ServiceDetails"
       component={ServiceDetailScreen}
     />
     <Stack.Screen
       name="CreateBooking"
       component={CreateBookingScreen}
     />
     <Stack.Screen
       name="BookingStatus"
       component={BookingStatusScreen}
     />
  </Stack.Navigator>
)   
};
export default CustomerBookingNavigator;