import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Cake } from './components/Cake.jsx';
import { Comments } from './components/Comments.jsx';
import { Posts } from './components/Posts.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/cake' element={<Cake />} />
                    <Route path='/comments' element={<Comments />} />
                    <Route path='/posts' element={<Posts />} />
                </Route>
            </Routes>
        </Router>
    </Provider>
)