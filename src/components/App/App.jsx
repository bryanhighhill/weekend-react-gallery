import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import ImageForm from '../ImageForm/ImageForm';

function App() {
  //variable to store /gallery data
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  // AXIOS GET request - retrieve data from /gallery and store it here
  const fetchGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('response from GET /gallery: ', response.data);
      setGallery(response.data);
    })
    .catch((error) => {
      console.log('error with GET /gallery: ', error);
    })
  }

//AXIOS POST request - post user-generated data to the db
const postImage = (url, description) => {
  Axios({
    method: 'POST',
    url: '/gallery',
    data: {
      url,
      description,
    }
  })
  .then((response) => {
    console.log('response from postImage: ', response);
    fetchGallery();
  })
  .catch((error) => {
    console.log('error with postImage: ', error);
  })
}

  //AXIOS PUT request - change number of Likes
  const addLikes = (image) => {
    console.log('image id in PUT: ', image.id);
    const id = image.id;

    Axios({
        method: 'PUT',
        url: `/gallery/like/${id}`,
        data: {
          id: id
        }
    })
    .then((response) => {
        console.log('response from PUT request: ', response);
        fetchGallery();
    })
  }

  //AXIOS DELETE request - change number of Likes
  const deleteImage = (image) => {
    console.log('in Delete request: ', image.id);
    const id = image.id;

    Axios({
        method: 'DELETE',
        url: `/gallery/${id}`,
        data: {
          id: id
        }
    })
    .then((response) => {
        console.log('response from PUT request: ', response);
        fetchGallery();
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bryan's Photo Gallery</h1>
          <ImageForm postImage={postImage}/>
        </header>
        <GalleryList gallery={gallery} addLikes={addLikes} deleteImage={deleteImage}/>
      </div>
    );
}

export default App;
