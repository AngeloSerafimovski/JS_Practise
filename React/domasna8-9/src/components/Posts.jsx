import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsRequest } from './../actions/PostsActions';

export const Posts = () => {

    const dispatch = useDispatch();

    const posts = useSelector(state => state.PostsReducer.posts);
    const error = useSelector(state => state.PostsReducer.error);

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, []);

    return (
        <div id='posts'>
            <h2>Posts</h2>

            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
            })}

            {error && <h1>{error}</h1>}
        </div>
    )
}