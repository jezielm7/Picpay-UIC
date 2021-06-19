import React from 'react';
// import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabRouter from './src/routes/tab.routes';

const App = () => {
  return (
    <NavigationContainer>
      <TabRouter />
    </NavigationContainer>
  );
};

export default App;
