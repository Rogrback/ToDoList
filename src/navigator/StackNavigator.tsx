import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListTasksScreen from '../screens/ListTasksScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

export type RootStackParams = {
  AddTaskScreen: undefined,
  ListTasksScreen: {
    title: string,
    deadline: string,
    starTime: string,
    endTime: string,
    remind: string,
    repeat: string,
    perro: string,
  }
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="ListTasksScreen" options={{ title: 'To-Do App' }} component={ListTasksScreen} />
      <Stack.Screen name="AddTaskScreen" options={{ title: 'Add Task' }} component={AddTaskScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
