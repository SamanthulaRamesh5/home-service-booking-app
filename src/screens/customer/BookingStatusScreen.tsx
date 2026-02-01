import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextStyle,
} from 'react-native';
import { fetchMyBookings } from '../../services/booking';
import { supabase, signOut } from '../../services/supabase';

const BookingStatusScreen = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;

      const data = await fetchMyBookings(user.id);
      setBookings(data);
    };

    load();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e: any) {
      Alert.alert('Logout failed', e.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {item.services.name}
            </Text>

            <Text style={getStatusStyle(item.status)}>
              Status: {item.status.toUpperCase()}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#FF3B30',
          padding: 16,
          margin: 16,
          borderRadius: 8,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const getStatusStyle = (status: string): TextStyle => {
  switch (status) {
    case 'pending':
      return { color: 'orange', fontWeight: 'bold' };
    case 'accepted':
      return { color: 'green', fontWeight: 'bold' };
    case 'rejected':
      return { color: 'red', fontWeight: 'bold' };
    default:
      return { color: 'gray' };
  }
};

export default BookingStatusScreen;
