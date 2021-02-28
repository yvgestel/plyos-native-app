import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Blogpost = ({ blogId, title, blogImage, date, navigation}) => {
   const goToBlogIdPage = () => {
        navigation.navigate('BlogID', {
            blog: {blogId}    
        })
    } 

    return (
        <TouchableOpacity 
            style={styles.blogPost}
            onPress={goToBlogIdPage}    
        >
            <Image 
                style={styles.blogImage} 
                source={{
                    uri: blogImage,
                }}
            />
            <View style={styles.blogBg}>
                <Text style={styles.blogTitle}>
                    {title}
                </Text>
                <Text style={styles.blogDate}>
                    {date}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    blogPost: {
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blogBg: {
        backgroundColor: '#7A8B99',
        borderRadius: 25,
        padding: 10,
    },
    blogTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFAFF',
    },
    blogDate: {
        textAlign: 'center',
        color: '#FFFAFF',
    },
    blogImage: {
        width: '80%',
        height: 150,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginBottom: -5,
    }
})