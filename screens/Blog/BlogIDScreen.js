import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';

import DatabaseHelper from '../../helpers/Database';

import { Background } from '../../components/atoms/Background';
import { Navbar } from '../../components/organismes/navbar/Navbar';
import { Loading } from '../../components/atoms/Loading';

export const BlogIDScreen = ({ route, navigation }) => {
    const { blog } = route.params;
    const [currentBlog, setCurrentBlog] = useState([])
    const db = new DatabaseHelper()

    useEffect (() => {
        async function fetchData() {
            const [response, error] = await db.fetch(`/blog/${blog.blogId}`)
            setCurrentBlog(response.data)
        } 
        fetchData()
    },[])

    return (
        currentBlog.length===0 
        ?
            <Loading />
        :
            <View >
                <Navbar navigation={navigation} />
                <Background>
                    <View style={styles.container}>
                            <Image 
                                style={styles.blogImage} 
                                source={{
                                    uri: currentBlog.blogImage,
                                }}
                            />
                            <SafeAreaView style={styles.markdown}>
                                <ScrollView showsVerticalScrollIndicator={false} >
                                    <Markdown>
                                        {currentBlog.markdown}
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
    blogImage: {
        width: '80%',
        height: '30%',
        borderRadius: 50,
        marginTop: 200,
    },
    markdown: {
        marginTop: 30,
        paddingBottom: 200,
    }
})