import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './src/screens/Login';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#eee'/>
      <Navigation/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
