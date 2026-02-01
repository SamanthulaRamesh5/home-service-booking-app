import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { createBooking } from '../../services/booking';
import { supabase } from '../../services/supabase';

const CreateBookingScreen = ({ route, navigation }: any) => {
  const { serviceId } = route.params;

  const handleBook = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    try {
      await createBooking(serviceId, user.id);
      navigation.replace('BookingStatus');
    } catch (e: any) {
      Alert.alert('Booking failed', e.message);
      console.error(e);
    }
  };

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 20 }}>Confirm Booking</Text>

      <TouchableOpacity onPress={handleBook}>
        <Text style={{ marginTop: 24, color: '#007AFF' }}>
          Confirm Booking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateBookingScreen;
