import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomerBookingStackParamList } from '../../navigation/types';
import { supabase } from '../../services/supabase';

type Props = NativeStackScreenProps<
  CustomerBookingStackParamList,
  'Services'
>;

type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const ServiceListScreen = ({ navigation }: Props) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*');

    if (error) {
      console.error(error);
    } else {
      setServices(data || []);
    }
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('ServiceDetails', { service: item })
            }
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServiceListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});
