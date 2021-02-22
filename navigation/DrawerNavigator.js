import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { TrainingNavigator } from '../screens/Training/TrainingNavigator';
import { BlogNavigator } from '../screens/Blog/BlogNavigator';
import { UserContext } from '../context/UserContext';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    const { user } = useContext(UserContext)
    const logInScreenName = user ? "Profile" : "Login"

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
                name={logInScreenName}
                component={LoginScreen}
            />
        </Drawer.Navigator>
    )
}