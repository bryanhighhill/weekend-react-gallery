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


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryProp={gallery}/>
      </div>
    );
}

export default App;
