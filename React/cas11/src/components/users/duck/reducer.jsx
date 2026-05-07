import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from './constants';

const initialState = {
    users: [],
    error: undefined
}

export default function reducer(state = initialState, action) {

    switch(action.type) {

        case GET_USERS_REQUEST:
            return {
                ...state
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: undefined
            }

        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_USER_REQUEST:
            return {
                ...state
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                error: undefined
            }

        case DELETE_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}