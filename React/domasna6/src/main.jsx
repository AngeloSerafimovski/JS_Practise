import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';
import {Posts} from './components/Posts.jsx';
import {Comments} from './components/Comments.jsx';
import {CommentDetails} from './components/CommentDetails.jsx';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/posts' element={<Posts />} />
    <Route path='/posts/:postId/comments' element={<Comments />} />
    <Route path='/posts/:postId/comments/:commentId' element={<CommentDetails />} />
  </Routes>
</Router>
)