import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import email from 'react-native-email';


import { Navbar } from '../components/organismes/navbar/Navbar';
import { Background } from '../components/atoms/Background';
import { Input } from '../components/atoms/Input';
import { Button } from '../components/atoms/Button';

export const ContactScreen = ({ navigation }) => {
    const {control, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        try {
            email(['youp21@msn.com'], 
            {
                cc: data.email,
                subject: data.subject,
                body: data.message,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Navbar navigation={navigation} />
            <Background>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        Contact
                    </Text>
                    <View style={styles.contactForm}>
                        <Input 
                            placeholder="E-mail" 
                            control={control} 
                            name="email" 
                            secure={false}
                            error={errors.email}
                        />
                        <Input 
                            placeholder="Subject" 
                            control={control} 
                            name="subject" 
                            secure={false}
                            error={errors.subject}
                        />
                        <Input 
                            placeholder="Message" 
                            control={control} 
                            name="message" 
                            secure={false}
                            error={errors.message}
                        />
                        <Button 
                            label="Send"
                            onPress={handleSubmit(onSubmit)} 
                            btn="btn-primary"
                            color="green"
                        />                        
                    </View>
                </View>                
            </Background>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactForm: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '90%'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})