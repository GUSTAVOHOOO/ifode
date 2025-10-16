import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const navTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: { ...DefaultTheme.colors, background: '#000000', card: '#000000', text: '#FFFFFF', border: '#2E2E2E', primary: '#FF2B2B' }
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
}
