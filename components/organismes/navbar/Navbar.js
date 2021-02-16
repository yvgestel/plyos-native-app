import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import SvgLogo from '../../../assets/icons/plyos-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ navigation }) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <SvgLogo 
                        style={styles.svgLogo}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <FontAwesomeIcon
                        icon={ faBars }
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#FFFAFF',
        height: 165,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    svgLogo: {
        height: 175,
        width: 175,
    }
});
