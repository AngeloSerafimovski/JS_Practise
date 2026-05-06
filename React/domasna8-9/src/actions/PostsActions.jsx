import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from './../constants/PostsConstants';
import axios from 'axios';

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFail = (err) => {
    return {
        type: FETCH_POSTS_FAIL,
        payload: err
    }
}

export const fetchPostsRequest = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch(fetchPostsSuccess(result.data));
        } catch (error) {
            dispatch(fetchPostsFail(error.message));
        }
    }
}