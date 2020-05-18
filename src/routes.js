import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
          headerTitle: 'Instagram',
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
