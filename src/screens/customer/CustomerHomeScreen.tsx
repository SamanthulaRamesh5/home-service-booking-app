import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

import { SERVICES } from '../../constants/services';
import ServiceCard from '../../components/SeviceCard';
import { useAuth } from '../../context/AuthContext';

const CustomerHomeScreen = () => {
  // const { profile, signOut } = useAuth();

  return (
    // <View style={styles.container}>
    //   {/* Header */}
    //   <View style={styles.header}>
    //     <Text style={styles.welcome}>
    //       Welcome 👋
    //     </Text>
    //     <Text style={styles.email}>
    //       {profile?.email ?? 'Customer'}
    //     </Text>
    //   </View>

    //   {/* Services */}
    //   <Text style={styles.sectionTitle}>Services</Text>

    //   <FlatList
    //     data={SERVICES}
    //     numColumns={2}
    //     keyExtractor={(item) => item.id}
    //     columnWrapperStyle={{ justifyContent: 'space-between' }}
    //     renderItem={({ item }) => (
    //       <ServiceCard
    //         title={item.title}
    //         icon={item.icon}
    //         onPress={() =>
    //           Alert.alert('Selected', item.title)
    //         }
    //       />
    //     )}
    //   />

    //   {/* Logout (temporary) */}
    //   <Text style={styles.logout} onPress={signOut}>
    //     Logout
    //   </Text>
    // </View>
    <View>
      <Text>CustomerHomeScreen</Text>
    </View>
  );
};

export default CustomerHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 24,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    color: '#555',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  logout: {
    textAlign: 'center',
    color: '#ff3b30',
    marginTop: 12,
  },
});
