import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFail,
    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFail
} from './actions';

import {
    getUsers,
    deleteUser
} from './../../../api/usersApi';

export const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(fetchUsersRequest(requestParams));

        return getUsers(requestParams)
            .then(res => {
                dispatch(fetchUsersSuccess(res));
                return res;
            })
            .catch(err => {
                dispatch(fetchUsersFail(err.message));
                return err;
            })
    }
}

export const removeUser = (id) => {
    return dispatch => {
        dispatch(deleteUserRequest(id));

        return deleteUser(id)
            .then(res => {
                dispatch(deleteUserSuccess(id));
                return res;
            })
            .catch(err => {
                dispatch(deleteUserFail(err.message));
                return err;
            })
    }
}