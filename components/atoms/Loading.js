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
    svgLoading: {
        width: 300,
        height: 400,
        marginBottom: 50,
    },
    text: {
        fontSize: 20,
    }
});
