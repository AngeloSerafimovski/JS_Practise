import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Posts } from './components/Posts';
import { Todos } from './components/Todos';
import { NotFound } from './components/NotFound';

export function App() {

  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setPosts(json))
      .catch(err => alert(err));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id='app'>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts postsList={posts} />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}