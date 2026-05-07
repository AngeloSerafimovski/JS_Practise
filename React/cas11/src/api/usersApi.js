import {api} from './../config/properties';

export const getUsers = async () => {
    try {
        const result = await fetch(`${api.root}/users`);
        const json = await result.json();
        return await Promise.resolve(json);
    }
    catch(err) {
        return await Promise.reject(err);
    }
}

export const deleteUser = async (id) => {
    try {
        const result = await fetch(`${api.root}/users/${id}`, {
            method: 'DELETE'
        });

        return await Promise.resolve(id);
    }
    catch(err) {
        return await Promise.reject(err);
    }
}