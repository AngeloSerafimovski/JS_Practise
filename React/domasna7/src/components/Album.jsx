import React, { useContext } from 'react';
import { AlbumContext } from '../utils/AlbumContext';

export const Album = () => {

    const { albums } = useContext(AlbumContext);

    return (
        <div id='albums'>
            <h2>Albums</h2>

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                    </tr>
                </thead>

                <tbody>
                    {albums.map(album => {
                        return (
                            <tr key={album.id}>
                                <td>{album.id}</td>
                                <td>{album.userId}</td>
                                <td>{album.title}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};