import { Routes, Route } from 'react-router-dom';
import React ,{useEffect}from 'react';
import PostPage from './PostPage';
import WebFont from 'webfontloader';

import "./css/main.css"


function App(props) {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
   }, []);

  return (
    < >
        <Routes>
          <Route path="/posts" element={<PostPage />} />


        </Routes>

    </>
  );
}


export default App;
