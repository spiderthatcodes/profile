import React from 'react';
import Nav from './components/Navbar';
import Sections from './components/Section';
// import Slide from './components/Slider';
// import { Parallax } from 'react-materialize'

// const chandelier = require('./images/chandelier.jpg')
// const sunset = require('./images/sunset.jpg')
// const stairs = require('./images/stairs.jpg')
// const city = require('./images/city.jpg')

function App() {
  return (
    <>
      <Nav />
      {/* <Slide /> */}
      <Sections />
    </>
  );
}

export default App;
