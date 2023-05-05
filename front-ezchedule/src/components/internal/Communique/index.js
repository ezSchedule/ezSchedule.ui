import React from 'react'
import './communique.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Post from '../Post/index';
import PostSindicate from '../Post/index'

const Communique = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://64540d77e9ac46cedf368660.mockapi.io/crud/posts')
            .then((response) => {
                console.log(response.data)
                setPosts(response.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])

    return (
        <>
            {
                posts.map(
                    (post) => (
                        <React.Fragment key={post.id}>
                            <PostSindicate date={post.date} title={post.title} hour={post.hour} content={post.content} />
                        </React.Fragment>
                    )
                )
            }
        </>
    )
}

export default Communique