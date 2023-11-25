import React, { useState, useEffect } from 'react';
import './communique.css';
import PostSindicate from '../Post/index';
import { db } from '../../../hooks/firebase';
import ToggleFilter from '../ToggleFilter';
import Filter from '../../assets/filter.png';

const Communique = (props) => {
  const [posts, setPosts] = useState([]);
  const [isAdm, setIsAdm] = useState(props.isAdm);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [selectedMessageType, setSelectedMessageType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const postsRef = db.collection(`conversations-${sessionStorage.ID}`);

    postsRef
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const filterPostsByMessageType = (messageType) => {
    setSelectedMessageType(messageType);
  };

  function deletePost(id) {
    const postRef = db.collection('conversations').doc(id); // Substitua 'sua-colecao' pelo nome da sua coleção no Firestore

    postRef
      .delete()
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((err) => console.log(err));
  }

  const filteredPosts = selectedMessageType
    ? posts.filter((post) => post.typeMessage === selectedMessageType)
    : posts;

  return (
    <div className='container-chat'>
      {isLoading ? (
        <div className='loading-message'>Carregando...</div>
      ) : (
        <>
          {isAdm ? (
            <img
              className='filter'
              src={Filter}
              alt='Filtro'
              onClick={() => setToggleFilter(!toggleFilter)}
            />
          ) : (
            ''
          )}
          <ToggleFilter isOpen={toggleFilter} setOpen={setToggleFilter} setPosts={setPosts} />
          {!isAdm ? (
            <div className='btn-type-announcement'>
              <button
                style={{ backgroundColor: selectedMessageType === 'Comunicado' ? '#5AE982' : '' }}
                onClick={() => filterPostsByMessageType('Comunicado')}
              >
                Comunicados
              </button>
              <button
                style={{ backgroundColor: selectedMessageType === 'Urgente' ? '#5AE982' : '' }}
                onClick={() => filterPostsByMessageType('Urgente')}
              >
                Urgente
              </button>
              <button
                style={{ backgroundColor: selectedMessageType === 'Votação' ? '#5AE982' : '' }}
                onClick={() => filterPostsByMessageType('Votação')}
              >
                Votação
              </button>
            </div>
          ) : (
            ''
          )}
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostSindicate
                key={post.id}
                id={post.id}
                date={post.dateTimePost}
                content={post.textContent}
                typeMessage={post.typeMessage}
                hour={post.dateTimePost}
                isAdm={props.isAdm}
                funcaoDeletar={() => deletePost(post.id)}
              />
            ))
          ) : (
            <div className='div-not-content-posts'>
              <p>Ainda não há posts!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Communique;
