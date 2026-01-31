import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { supabase } from '../../services/supabase';
import {useNavigation} from '@react-navigation/native';


const RegisterScreen = () => {


const { navigate } = useNavigation<any>();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'customer' | 'provider' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !role) {
      Alert.alert('Validation', 'All fields are required');
      return;
    }

    try {
      setLoading(true);

      //  Create auth user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error || !data.user) {
        throw error;
      }

      // Save role in profiles table
      const { error: roleError } = await supabase.from('profiles').upsert({
        id: data.user.id,
        role,
      });

      if (roleError) {
        throw roleError;
      }

      Alert.alert('Success', 'Account created successfully');
      // RootNavigator will auto-redirect
      navigate('Login');

    } catch (err: any) {
      Alert.alert('Registration failed', err.message);
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.roleTitle}>Select Role</Text>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === 'customer' && styles.roleSelected,
          ]}
          onPress={() => setRole('customer')}
        >
          <Text>Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleButton,
            role === 'provider' && styles.roleSelected,
          ]}
          onPress={() => setRole('provider')}
        >
          <Text>Provider</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={{ color: '#fff' }}>
          {loading ? 'Creating...' : 'Register'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigate('Login')}
      >
        <Text style={{ color: '#007AFF' }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  roleTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  roleContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  roleButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 8,
  },
  roleSelected: {
    backgroundColor: '#cce5ff',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButton: {
    marginTop: 16,
    alignItems: 'center',
  },  
});
