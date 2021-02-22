import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigation/DrawerNavigator';
import { UserContextProvider } from './context/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>   
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({

});
