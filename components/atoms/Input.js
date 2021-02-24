import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { Colors } from '../../styles/Colors';

export const Input = ({placeholder, control, name, secure, error}) => {
    
    return (
        <View>
            <Controller 
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput 
                        style={styles.inputField}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        secureTextEntry={secure}
                    />
                )}
                name={name}
                rules={{required: true}}
                defaultValue=""
            />
            {error && <Text style={styles.errorText}>This field is required</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        width: 300,
        height: 60,
        backgroundColor: Colors.white.default,
        padding: 20,
        margin: 20,
        borderRadius: 30,
    },
    errorText: {
        textAlign: 'center',
        marginTop: -20,
        fontWeight: 'bold',
        fontStyle: 'italic'
        
    }
  });