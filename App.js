import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigator} from './navigation/DrawerNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>    
  );
}

const styles = StyleSheet.create({

});
