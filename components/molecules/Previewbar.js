import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Preview } from '../atoms/Preview';

import Image from '../../assets/oefening1.jpg';

export const Previewbar = ({name, navigation}) => {
    
    return (
        <View>
            <View style={styles.previewInfo}>
                <Text style={styles.infoTitle}>{name}</Text>
            </View>
            <View style={styles.previewBar}>
                <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                    <Preview 
                        image={Image} 
                        id='1' 
                        navigation={navigation}
                    />
                    <Preview 
                        image={Image} 
                        id='2' 
                        navigation={navigation}
                    />
                    <Preview 
                        image={Image} 
                        id='3' 
                        navigation={navigation}
                    />
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