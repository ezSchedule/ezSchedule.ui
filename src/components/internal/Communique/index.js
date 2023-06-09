import React, { useState, useEffect } from 'react';
import './communique.css';
import PostSindicate from '../Post/index';
import postFetch from '../../../hooks/postFetch';
import ToggleFilter from '../ToggleFilter';
import Filter from '../../assets/filter.png';

const Communique = (props) => {

  const [posts, setPosts] = useState([]);
  const [isAdm, setIsAdm] = useState(props.isAdm)
  const [toggleFilter, setToggleFilter] = useState(false);
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



  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

  return (
    <div className='container-chat'>
      
      <img
        className='filter'
        src={Filter}
        alt='Filtro'
        onClick={() => setToggleFilter(!toggleFilter)}
      />

      <ToggleFilter isOpen={toggleFilter} setOpen={setToggleFilter} setPosts={setPosts} />
      {
        posts ? (
          posts.map((post) => {
            if (selectedOption && post.typeMessage !== selectedOption) {
              return null;
            }

            return (
              <PostSindicate
                key={post.id}
                id={post.id}
                date={post.dateTimePost.substring(-10, 10)}
                hour={post.dateTimePost.substring(10)}
                content={post.textContent}
                typeMessage={post.typeMessage}
                isAdm={props.isAdm}
                funcaoDeletar={() => deletePost(post.id)}
              />
            );
          })
        ) : (
          <div className='div-not-content-posts'>
            <p>Ainda não há posts!</p>
          </div>
        )}
    </div>
  );
};



export default Communique;