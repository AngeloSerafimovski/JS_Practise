import React, { useContext } from 'react';
import { GalleryContext } from '../utils/GalleryContext';

export const Popup = () => {

    const { selectedImage, setSelectedImage, deleteSelectedImage } = useContext(GalleryContext);

    return (
        <div id='popup'>
            <button onClick={() => { setSelectedImage('') }} className='close-popup'>
                &times;
            </button>

            <button onClick={deleteSelectedImage}>
                Delete Image
            </button>

            <div className='popup-container'>
                <img src={selectedImage} alt={"Image"} />
            </div>
        </div>
    );
};