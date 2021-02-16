import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MyTrainingScreen } from './MyTrainingScreen';
import { ExerciseScreen } from './ExerciseScreen';


const Stack = createStackNavigator();

export const TrainingNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="Training"
                component={MyTrainingScreen}
                navigation={navigation}
            />
            <Stack.Screen 
                name="ExerciseID"
                component={ExerciseScreen}
                navigation={navigation}
            />
        </Stack.Navigator>
    )
};