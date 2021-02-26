import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import DatabaseHelper from '../../helpers/Database';

import { Navbar } from '../../components/organismes/navbar/Navbar';
import { Background } from '../../components/atoms/Background';
import { Blogpost } from '../../components/molecules/Blogpost';
import { Loading } from '../../components/atoms/Loading';

export const BlogsScreen = ({ navigation }) => {
    const [blogs, setBlogs] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const db = new DatabaseHelper()
    useEffect (() => {
        async function fetchData() {
            setErrorMessage(null)
            const [response, error] = await db.fetch("/blog")
            setBlogs(response.data)
            if(error) {
                setErrorMessage("There is an error on the server. Try again later.")
            }
        } 
        fetchData()
    },[])

    return (
        !blogs
        ?
            <Loading error={errorMessage}/>
        :
            <View>
                <Navbar navigation={navigation} />
                <View>
                    <Background> 
                        <View style={styles.container}>
                            <Text style={styles.header}>
                                Blogs
                            </Text>   
                            <SafeAreaView>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={styles.blogContainer}>
                                        { blogs.map(blog => (
                                            <Blogpost key={blog._id} blogId={blog._id} title={blog.title} date={blog.date} blogImage={blog.blogImage} navigation={navigation} />
                                            ))
                                        }
                                    </View>   
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
        alignItems: 'center'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    blogContainer: {
     
    }
})