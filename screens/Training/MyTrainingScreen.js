import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

import { Navbar } from '../../components/organismes/navbar/Navbar';
import { Background } from '../../components/atoms/Background';
import { Previewbar } from '../../components/molecules/Previewbar';

export const MyTrainingScreen = ({ navigation }) => {
    return (
        <View>
            <Navbar navigation={navigation} />
            <View>
                <Background color='green'>
                    <View style={styles.container}>
                        <Text style={styles.header}>
                            MyTraining
                        </Text>       
                        <SafeAreaView>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Previewbar 
                                    name="Training 1"
                                    navigation={navigation}
                                />
                                <Previewbar 
                                    name="Training 2"
                                    navigation={navigation}
                                />
                                <Previewbar 
                                    name="Training 3"
                                    navigation={navigation}
                                />
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </Background>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
    },
})