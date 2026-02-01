import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomerBookingStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<
  CustomerBookingStackParamList,
  'ServiceDetails'
>;

const ServiceDetailScreen = ({ route, navigation }: Props) => {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.name}</Text>
      <Text>{service.description}</Text>
      <Text style={styles.price}>₹{service.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('CreateBooking', {
            serviceId: service.id,
          })
        }
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    marginVertical: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
