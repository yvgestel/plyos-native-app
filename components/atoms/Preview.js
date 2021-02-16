import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

export const Preview = ({image, title, id, navigation}) => {
    const goToExerciseIdPage = () => {
        navigation.navigate('ExerciseID', {
            trainingId: {id}    
        })
    }


    return (    
        <View>
            <TouchableOpacity 
                style={styles.preview}
                onPress={goToExerciseIdPage}
            >
                <Image 
                    style={styles.image} 
                    source={image}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    preview: {
        marginRight: 25,
    }, 
    image: {
        width: 150,
        height: 150,
    }
  });