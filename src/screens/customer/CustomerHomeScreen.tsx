import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomerHomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>
        What would you like to do today?
      </Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Services')}
      >
        <Text style={styles.buttonText}>Book a Service</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('BookingStatus')}
      >
        <Text style={styles.secondaryText}>My Bookings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerHomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,  
    backgroundColor: '#f9f9f9',
  },
  title: {  
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16, 
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 8,  
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    paddingVertical: 14,  
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  secondaryText: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 