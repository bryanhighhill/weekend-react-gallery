import React, { useState, useEffect } from 'react';
import './ImageForm.css';

const ImageForm = ({postImage}) => {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [formVisible, setFormVisible] = useState(false);
    
    const isInvalid = (url, description) => {
        if (url.length <= 0 && description.length <= 0) {
            alert('must enter a URL and description')
            return true;
        }
        if (url.length <= 0) {
            alert('must enter a URL')
            return true;
        }
        if (description.length <= 0){
            alert('must enter a description')
            return true;
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!isInvalid(url, description)) {
        postImage(url, description)
        }
    }

    return (
        <>
            <button 
                className="form-visible-button"
                onClick={() => {setFormVisible(!formVisible)}}
            >
                Add Image Form
            </button>
            {formVisible && <div className="image-form">
                <br />
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
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                    <label htmlFor="description">Description: </label>

                    <input 
                        id="description" 
                        //name attribute should match html attribute
                        name="description"
                        value={description} 
                        placeholder="image description"
                        onChange={(event) => setDescription(event.target.value)}
                    /> 
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                    <button 
                        type="submit"
                        className="submit-image-button"
                    >
                        Submit Image</button>
                </form>
            </div>}
        </>
    )
}

export default ImageForm;