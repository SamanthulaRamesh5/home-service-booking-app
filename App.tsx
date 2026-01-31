import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </AuthProvider>
    // <NavigationContainer>
    //   <RootNavigator />
    // </NavigationContainer>
  )
};

export default App;