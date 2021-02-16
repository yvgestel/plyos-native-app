import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';

import DatabaseHelper from '../../helpers/Database';

import { Navbar } from '../../components/organismes/navbar/Navbar';
import { Background } from '../../components/atoms/Background';

export const ExerciseScreen = ({ navigation, route }) => {
    const { trainingId } = route.params;
    const [currentExercise, setCurrentExercise] = useState(null)
    const db = new DatabaseHelper()   

    useEffect (() => {
        async function fetchData() {
            const [response, error] = await db.fetch(`/exercises/5ff9c39d981efe5a84e78111`)
            setCurrentExercise(response.data)
        } 
        fetchData()
    },[])

    return (
        !currentExercise
        ?
            <Text>Loading..</Text>
        :
            <View>
                <Navbar navigation={navigation} />
                <Background color='green'  >
                    <View style={styles.container}>
                        <Image 
                            style={styles.exerciseImage} 
                            source={{
                                uri: "http://192.168.1.103:3000/uploads/blog-talentontwikkeling-wat-zegt-wetenschappelijk-onderzoek.jpeg",
                            }}
                        />
                        <SafeAreaView style={styles.markdown}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Markdown>
                                    {currentExercise.markdown}
                                </Markdown>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </Background>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    exerciseImage: {
        width: 250,
        height: 200,
        borderRadius: 50,
        marginTop: 200,
    },
    markdown: {
        marginTop: 30,
        paddingBottom: 200,
    }
})