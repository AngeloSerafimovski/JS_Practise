import { FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from './../constants/CommentsConstants';
import axios from 'axios';

export const fetchCommentsSuccess = (comments) => { //Array(500) <- comments
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (err) => { //alert na error-ot
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: err
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/comments') // povik do url za comments
            .then(result => dispatch(fetchCommentsSuccess(result.data)))
            .catch(error => dispatch(fetchCommentsFail(error.message)))
    }
}