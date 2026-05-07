import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from  './constants';

export const fetchUsersRequest = (requestParams) => {
    return {
        type: GET_USERS_REQUEST,
        payload: requestParams
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFail = (error) => {
    return {
        type: GET_USERS_FAIL,
        payload: error
    }
}

export const deleteUserRequest = (id) => {
    return {
        type: DELETE_USER_REQUEST,
        payload: id
    }
}

export const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: id
    }
}

export const deleteUserFail = (error) => {
    return {
        type: DELETE_USER_FAIL,
        payload: error
    }
}