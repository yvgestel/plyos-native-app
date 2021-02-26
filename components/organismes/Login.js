import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text } from 'react-native';

import DatabaseHelper from '../../helpers/Database';

import { Navbar } from './navbar/Navbar';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { UserContext } from '../../context/UserContext';
import { faBold } from '@fortawesome/free-solid-svg-icons';

export const Login = ({ login, navigation }) => {
    const {control, handleSubmit, errors} = useForm();
    const { logInUser } = useContext(UserContext)
    const [loginError, setLoginError] = useState([]);

    const db = new DatabaseHelper();

    const onSubmit = async ({email, password}) => {
        const user = {
          email: email,
          password: password
        };

        const [response, error] = await db.logIn(user);
        if (response) {
            try {
                setLoginError(null)
                const userKey = ['@plyosUser', response.id];
                const userToken = ['@plyosToken', response.token];
                await AsyncStorage.multiSet([userKey, userToken]);
                logInUser();
                navigation.navigate("Home");
            } catch (err) {
                console.log(err)
            }

        } else {
          if(error.response.status==401) {
            setLoginError("Combinatie van e-mail en wachtwoord is onbekend.")
          } else {
            setLoginError("There is an error on the server. Try again later.") 
          }
          
        }
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
                    {loginError && <Text style={styles.errorMessage}>{loginError}</Text>}
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
    },
    errorMessage: {
        padding: 10,
        textAlign: 'center',
        lineHeight: 20,
        fontWeight: 'bold',
    }
})