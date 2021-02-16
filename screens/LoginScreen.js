import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage'

import { Profile } from '../components/organismes/Profile';
import { Login } from '../components/organismes/Login';

export const LoginScreen = ({ navigation }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    // useEffect (() => {
    //     async function checkForUser() {
    //         try {
    //             const token = await AsyncStorage.getItem('@plyosToken')
    //             if (token) { 
    //                 setLoggedIn(true)
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     } 
    //     checkForUser()
    // },[])

    return (
        <View>
        {
            loggedIn 
            ?
                <Profile navigation={navigation} />
            :
                <Login login={setLoggedIn} navigation={navigation} />

        }
        </View>
    )
};

