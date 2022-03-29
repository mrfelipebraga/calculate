import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Consume from '../screens/Consume';
import Form from '../screens/Form';
import Report from '../screens/Report';
import SignIn from '../screens/SignIn';


const Stack = createNativeStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='Form' component={Form} options={{ headerShown: false }} />
        <Stack.Screen name='Consume' component={Consume} options={{ headerShown: false }} />
        <Stack.Screen name='Report' component={Report} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}