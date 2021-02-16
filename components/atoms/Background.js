import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

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
        backgroundColor: '#FFFAFF',
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
        backgroundColor: '#D8A664',
    },
    bgGreen: {
        backgroundColor: '#99D7B1',
    },
})