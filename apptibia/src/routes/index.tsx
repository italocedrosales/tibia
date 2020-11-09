import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import WorldDetails from '../pages/WorldDetails';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#364C50' },
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={WorldDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
