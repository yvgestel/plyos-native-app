import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Navbar } from '../components/organismes/navbar/Navbar';

import { bgImage } from '../assets/split-vision.png';

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Navbar navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.bgContainer}>
                        <View style={styles.greenCircle} />
                        <View style={styles.orangeCircle}/>
                        <Image style={styles.bgImage} source={require('../assets/split-vision.png')}/>
                    </View>
                    <View style={styles.fgContainer}>
                        <Text style={styles.pageHeader}>
                            Welcome!
                        </Text>
                        <Text style={styles.text}>
                            Start using our app to put your prepared training into practice.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFF',
        height: '100%',
    },
    contentContainer: {
        position: 'absolute',
        height: '100%',
    },
    bgContainer: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
    },
    fgContainer: {
        padding: 50,
        paddingTop: 0,
        zIndex: 1
    },
    pageHeader: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 55,
    },
    text: {
        fontSize: 22,
        lineHeight: 35,
    },
    greenCircle: {
        width: 400,
        height: 400,
        backgroundColor: '#99D7B1',
        borderRadius: 200,
        position: 'absolute',
        zIndex: 0,
        bottom: 175,
        right: -150,
    },
    orangeCircle: {
        width: 350,
        height: 350,
        backgroundColor: '#D8A664',
        borderRadius: 175,
        position: 'absolute',
        zIndex: 0,
        top: 30,
        left: -150,
    },
    bgImage: {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        bottom: '25%',
    }
})