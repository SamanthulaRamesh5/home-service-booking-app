import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged, User } from 'firebase/auth';


import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { auth, db } from '../services/firebase';
type Props = {
  role: 'customer' | 'provider' | null;
};

const RootNavigator = ({ role }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
      setLoading(false);
    }
    );

    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      {!user ? (
        <AuthNavigator />
      ) : (
        <AppNavigator role={role} />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
