import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';


import AppRoute from "./screens/AppRoute"

import store, { persistor } from './store';


const LoadingMarkup = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
    }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);
export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
         <AppRoute />
        <StatusBar style="auto" />
      </PersistGate>
    </ReduxProvider>
  );
}