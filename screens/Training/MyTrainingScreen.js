import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

import { Navbar } from '../../components/organismes/navbar/Navbar';
import { Background } from '../../components/atoms/Background';
import { Previewbar } from '../../components/molecules/Previewbar';
import { UserContext } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatabaseHelper from '../../helpers/Database';

export const MyTrainingScreen = ({ navigation }) => {
    const [allTrainings, setAllTrainings] = useState([]);
    const { user } = useContext(UserContext);

    const db = new DatabaseHelper();

    useEffect(() => {
        async function fetchData() {
            const token = await AsyncStorage.getItem('@plyosToken')
            const id = await AsyncStorage.getItem('@plyosUser')
            const [response, error] = await db.privateFetch(`/training/${id}`, token)
            if (response.data) {
                setAllTrainings(response.data)
            }
        } 
        if (!user){
            navigation.navigate("Login")
        }
        fetchData()
    },[])

    return (
        <View>
            <Navbar navigation={navigation} />
            <View>
                <Background color='green'>
                    <View style={styles.container}>
                        <Text style={styles.header}>
                            MyTraining
                        </Text>  
                            {!allTrainings ?
                            <Text>No training found</Text>
                            :
                            <SafeAreaView>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {allTrainings.map((training) => {
                                        return (
                                            <Previewbar 
                                                key={training.id}
                                                navigation={navigation}
                                                training={training}
                                            />
                                        )
                                    })}
                                </ScrollView>
                            </SafeAreaView>
                            }     
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