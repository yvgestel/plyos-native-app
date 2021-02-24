import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../styles/Colors';

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
        backgroundColor: Colors.orange.default,
    },
    btnGreen: {
        backgroundColor: Colors.green.default,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})