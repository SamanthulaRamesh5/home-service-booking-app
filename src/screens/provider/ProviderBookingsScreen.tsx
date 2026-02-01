import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../services/supabase';

const ProviderBookingsScreen = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  const fetchBookings = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    const { data, error } = await supabase
      .from('bookings')
      .select(`
        id,
        status,
        services(name)
      `)
      .eq('provider_id', user.id)
      .eq('status', 'pending');

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    setBookings(data || []);
  };

  const updateStatus = async (id: string, status: 'accepted' | 'rejected') => {
    const { error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id);

    if (error) {
      Alert.alert('Update failed', error.message);
      return;
    }

    fetchBookings(); // refresh list
  };

  useEffect(() => {
    fetchBookings();
  }, []);

return (
  <View style={{ flex: 1, padding: 24 }}>
    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
      Pending Bookings
    </Text>

    <FlatList
      data={bookings}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <Text style={{ marginTop: 24 }}>
          No pending bookings
        </Text>
      }
      renderItem={({ item }) => (
        <View style={{ marginTop: 16 }}>
          <Text>{item.services?.name}</Text>

          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <TouchableOpacity
              onPress={() => updateStatus(item.id, 'accepted')}
              style={{ marginRight: 16 }}
            >
              <Text style={{ color: 'green' }}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => updateStatus(item.id, 'rejected')}
            >
              <Text style={{ color: 'red' }}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  </View>
);

};

export default ProviderBookingsScreen;
