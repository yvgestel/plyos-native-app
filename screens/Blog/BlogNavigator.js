import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { BlogsScreen } from '../Blog/BlogsScreen';
import { BlogIDScreen } from '../Blog/BlogIDScreen';

const Stack = createStackNavigator();

export const BlogNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="Blogs"
                component={BlogsScreen}
            />
            <Stack.Screen 
                name="BlogID"
                component={BlogIDScreen}
            />
        </Stack.Navigator>
    )
};