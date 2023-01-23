import React, { useState, useEffect } from 'react';
import './ImageForm.css';

const ImageForm = ({postImage}) => {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [formVisible, setFormVisible] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        postImage(url, description);
    }

    return (
        <>
            <button className="add-image-button" onClick={() => setFormVisible(!formVisible)}/>
            <div class="image-form">
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
                        class="input"
                        onChange={(event) => setUrl(event.target.value)}
                    />
                    <br />

                    <label htmlFor="description">Description: </label>

                    <input 
                        id="description" 
                        //name attribute should match html attribute
                        name="description"
                        value={description} 
                        placeholder="image description"
                        class="input"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <br />

                    <button type="submit" class="submit">Add New Image</button>
                </form>
            </div>
        </>
    )
}

export default ImageForm;