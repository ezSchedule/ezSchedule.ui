import React from 'react';
import './communique.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/index';
import PostSindicate from '../Post/index';
import postFetch from '../../../hooks/postFetch';

const Communique = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postFetch.get('')
            .then((response) => {
                console.log(response.data)
                setPosts(response.data)
            }).catch((err) => {
                console.log(err);
            });
        console.log(posts)
    }, [])

    function deletePost(id) {
        console.log(id);
        setPosts(posts.filter(post => post.id !== id))

        postFetch.delete(`/delete/${id}`)
            .then(() => {

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            {
                posts ?
                    posts.map(
                        (post) => (
                            <React.Fragment key={post.id}>
                                <PostSindicate
                                    id={post.id}
                                    date={post.dateTimePost.substring(-10, 10)}
                                    hour={post.dateTimePost.substring(10)}
                                    content={post.textContent}
                                    typeMessage={post.typeMessage}
                                    funcaoDeletar={() => deletePost(post.id)} />
                            </React.Fragment>
                        )
                    )
                    :
                    <div className='div-not-content-posts'>
                            <p>Ainda não há posts!</p>
                    </div>
            }
        </>
    )
}

export default Communique