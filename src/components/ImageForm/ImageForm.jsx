import React, { useState, useEffect } from 'react';

const ImageForm = ({postImage}) => {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        postImage(url, description);
    }

    return (
        <>
            <h2>Add Image</h2>
            {/* post request function called here */}
            <form onSubmit={onSubmit}>

                {/* form needs 2 inputs: URL of image, description of image */}
                <label htmlFor="url">URL: </label>

                <input 
                    id="url" 
                    //name attribute should match html attribute
                    name="url"
                    value={url} 
                    placeholder="image url"
                    onChange={(event) => setUrl(event.target.value)}
                />

                <label htmlFor="description">Description: </label>

                <input 
                    id="description" 
                    //name attribute should match html attribute
                    name="description"
                    value={description} 
                    placeholder="image description"
                    onChange={(event) => setDescription(event.target.value)}
                />

                <button type="submit">Add New Image</button>
            </form>
        </>
    )
}

export default ImageForm;