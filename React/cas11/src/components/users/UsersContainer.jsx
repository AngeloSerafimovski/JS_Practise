import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UsersComponent} from './UsersComponent';
import {
    fetchUsers,
    removeUser
} from './duck/operations';

export default function UsersContainer() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const error = useSelector(state => state.usersReducer.error);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <div id="users-container">
            <UsersComponent 
                listOfUsers={users} 
                error={error}
                deleteUser={deleteUser}
            />
        </div>
    )
}