import React, { useContext } from 'react';
import { View } from 'react-native';

import { Profile } from '../components/organismes/Profile';
import { Login } from '../components/organismes/Login';
import { UserContext } from '../context/UserContext';

export const LoginScreen = ({ navigation }) => {
    const { user } = useContext(UserContext);

    return (
        <View>
        {
            user 
            ?
                <Profile navigation={navigation}  />
            :
                <Login navigation={navigation} />

        }
        </View>
    )
};

