import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DatabaseHelper from '../../helpers/Database';

import { Navbar } from '../../components/organismes/navbar/Navbar';
import { Background } from '../../components/atoms/Background';
import { Blogpost } from '../../components/molecules/Blogpost';

export const BlogsScreen = ({ navigation }) => {
    const [blogs, setBlogs] = useState([])

    const db = new DatabaseHelper()
    useEffect (() => {
        async function fetchData() {
            const [response, error] = await db.fetch("/blog")
            setBlogs(response.data)
        } 
        fetchData()
    },[])

    return (
        <View>
            <Navbar navigation={navigation} />
            <View>
                <Background>
                    <View style={styles.container}>
                        <Text style={styles.header}>
                            Blogs
                        </Text>    
                        <View style={styles.blogContainer}>
                        { blogs.map(blog => (
                            <Blogpost key={blog._id} blogId={blog._id} title={blog.title} date={blog.date} blogImage={blog.blogImage} navigation={navigation} />
                            ))
                        }
                        </View>            
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