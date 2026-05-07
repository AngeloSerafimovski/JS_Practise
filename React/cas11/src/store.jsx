import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {usersReducer} from './components/users/duck';


const reducer = {
    usersReducer:usersReducer
}

const logger = createLogger();

export default configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})