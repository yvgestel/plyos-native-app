import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, View } from 'react-native';

import { Navbar } from './navbar/Navbar';
import { Background } from '../atoms/Background';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button'
import { UserContext } from '../../context/UserContext';

export const Profile = ({ navigation }) => {
    const { logOutUser } = useContext(UserContext);

    const logOut = async () => {
        console.log("Logout")
        try {
            await AsyncStorage.multiRemove(['@plyosUser', '@plyosToken', '@plyosId']);
            logOutUser();
        } catch (err) {
            console.log(err);
        }
        navigation.navigate("Home")
    }

    const changePassword = () => {
        console.log("Change password")
    }

    return (
        <View>
            <Navbar navigation={navigation} />
            <Background color="green">
                <View style={styles.container}>
                    <Button 
                        label="Change password"
                        onPress={changePassword}
                        btn="btn-secondary"
                        color="orange" 
                    />
                    <Button 
                        label="Logout"
                        onPress={logOut}
                        btn="btn-primary"
                        color="orange" 
                    />
                </View>
            </Background>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
})