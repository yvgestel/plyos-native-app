import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export const Button = ({label, onPress, btn, color }) => {
    return (
        <TouchableOpacity
            style={[
                (btn === "btn-secondary" ? styles.btnSecondary : styles.btnPrimary),
                (color === "orange" ? styles.btnOrange: styles.btnGreen),
                , styles.btnPrimary
            ]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnPrimary: {
        width: 200,
        height: 60,
        padding: 15,
        margin: 40,
        borderRadius: 30,
        justifyContent: 'center'
    },
    btnSecondary: {
        width: 200,
        height: 60,
        padding: 15,
        margin: 40,
        borderRadius: 30,
        justifyContent: 'center'
    },
    btnTertiary: {
        width: 200,
        height: 60,
        padding: 15,
        margin: 40,
        borderRadius: 30,
        justifyContent: 'center'
    },
    btnOrange: {
        backgroundColor: '#D8A664',
    },
    btnGreen: {
        backgroundColor: '#99D7B1',
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})