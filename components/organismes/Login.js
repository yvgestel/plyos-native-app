import React from 'react';
import { useForm } from 'react-hook-form';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View } from 'react-native';

import DatabaseHelper from '../../helpers/Database';

import { Navbar } from './navbar/Navbar';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export const Login = ({ login, navigation }) => {
    const {control, handleSubmit, errors} = useForm();

    db = new DatabaseHelper();

    const onSubmit = async ({email, password}) => {
        const user = {
          email: email,
          password: password
        };

        const [response, error] = await db.logIn(user);
        console.log(response)
        // if (response) {
        //     try {
        //         const userKey = ['@plyosUser', email];
        //         const userToken = ['@plyosToken', email];
        //         await AsyncStorage.multiSet([userKey, userToken]);
        //     } catch (err) {
        //         console.log(err)
        //     }

        // } else {
        //   console.log(error)
        // }
    };

    return (
        <View>
            <Navbar navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.loginForm}>
                    <Input 
                        placeholder="E-mail" 
                        control={control}
                        name="email"
                        secure={false}
                        error={errors.email}
                    />
                    <Input 
                        placeholder="Password" 
                        control={control}
                        name="password"
                        secure={true}
                        error={errors.password}
                    />
                    <Button 
                        label="Login"
                        onPress={handleSubmit(onSubmit)}
                        btn="btn-primary"
                        color="orange" 
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFFAFF',
        alignItems: 'center', 
        height: '90%'
    },
    loginForm: {
        backgroundColor: '#99D7B1',
        height: '60%',
        width: '90%',
        borderRadius: 50,
        marginTop: 75,
        alignItems: 'center',
        justifyContent: 'center',
    }
})