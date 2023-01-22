import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

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


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bryan's Photo Gallery</h1>
        </header>
        <GalleryList galleryProp={gallery} addLikesProp={addLikes}/>
      </div>
    );
}

export default App;
