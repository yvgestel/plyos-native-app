import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Loading = ({ navigation, errorMessage }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Loading...
            </Text>
            {errorMessage && <Text style={styles.text}>{errorMessage}</Text>}
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'

    },
    text: {
        fontSize: 30,
    }
});
