import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';

export const Background = ({ children, color }) => {
    return (
        <View style={styles.bgContainer}>
            <View style={[
                (color === "green" ? styles.bgGreen : styles.bgOrange),
                styles.bgContent
            ]}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bgContainer: { 
        backgroundColor: Colors.white.default,
        justifyContent: 'flex-end',
        paddingTop: 20,
    },
    bgContent: {
        height: 700,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,        
        width: '100%',
        padding: 50,
        zIndex: -1,
    },
    bgOrange: {
        backgroundColor: Colors.orange.default,
    },
    bgGreen: {
        backgroundColor: Colors.green.default,
    },
})