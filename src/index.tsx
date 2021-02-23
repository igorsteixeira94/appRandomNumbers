import React from 'react';
import { StatusBar, View } from 'react-native';
import RandomNumbers from './screens/RandowNumbers';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#353e4d" barStyle="light-content" />
      <RandomNumbers />
    </>
  );
};

export default App;
