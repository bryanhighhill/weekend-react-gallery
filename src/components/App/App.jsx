import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

import './App.css';

function App() {
  const [gallery, setGallery] = useState([]);



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
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
