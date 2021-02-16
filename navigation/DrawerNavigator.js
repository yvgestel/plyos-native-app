import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { TrainingNavigator } from '../screens/Training/TrainingNavigator';
import { BlogNavigator } from '../screens/Blog/BlogNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    const loginScreenName = false ? "Profile" : "Login"

    return (
        <Drawer.Navigator
            initialRouteName="Home"
        >
            <Drawer.Screen 
                name="Home"
                component={HomeScreen}
            />
            <Drawer.Screen 
                name="Blogs"
                component={BlogNavigator}
            />
            <Drawer.Screen 
                name="MyTraining"
                component={TrainingNavigator}
            />
            <Drawer.Screen 
                name="Contact"
                component={ContactScreen}
            />
            <Drawer.Screen 
                name={loginScreenName}
                component={LoginScreen}
            />
        </Drawer.Navigator>
    )
}