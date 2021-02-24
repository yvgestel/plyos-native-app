import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Loading = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Loading...
            </Text>
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
