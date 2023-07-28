import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet } from 'react-native';
import Welcome from './Screens/Welcome';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name='Signup'
          component={SignupScreen}
          options={{ title: 'SignUp', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
