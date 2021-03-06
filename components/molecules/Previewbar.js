import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Preview } from '../atoms/Preview';

export const Previewbar = ({navigation, training}) => {
    const renderExercises = () => {
        return (
            training.exercises.map((exercise)=>{
                console.log(exercise.exerciseImage)
                return (
                    <Preview 
                        key={exercise._id}
                        image={exercise.exerciseImage} 
                        id={exercise._id} 
                        navigation={navigation}
                        title={exercise.name}
                    />
                )
            })
        )
    }
    return (
        <View>
            <View style={styles.previewInfo}>
                <Text style={styles.infoTitle}>{training.name}</Text>
            </View>
            <View style={styles.previewBar}>
                <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                    { training.exercises.length<1 ?
                        <Text>No training found</Text>
                        :
                        renderExercises()
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    previewInfo: {
        width: 150,
        height: 50,
        backgroundColor: '#D8A664',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    previewBar: {
        
        backgroundColor: '#D8A664',
        borderBottomLeftRadius: 40,
        marginBottom: 30,
        padding: 20,
    },
    scrollView: {
        flexDirection: 'row',
    },
  });