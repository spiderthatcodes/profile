import React from 'react'
import { Parallax } from 'react-materialize'

const bark = require('./images/bark.jpg')

function App () {
  return (
    <>
      <div>
      <div className='section white'>
          <div className='row container'>
            <h1 className='header'>Jessica Dickerson</h1>
            <p className='grey-text text-darken-3 lighten-3'>
              Software Developer and Certified Professional Scrum Master
            </p>
          </div>
        </div>
        <Parallax
          image={<img alt='' src={bark} />}
          options={{
            responsiveThreshold: 0
          }}
        />
        <div className='section white'>
          <div className='row container'>
            <h2 className='header'></h2>
            <p className='grey-text text-darken-3 lighten-3'>
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <Parallax
          image={<img alt='' src={bark} />}
          options={{
            responsiveThreshold: 0
          }}
        />
        <div className='section white'>
          <div className='row container'>
            <h2 className='header'>Parallax</h2>
            <p className='grey-text text-darken-3 lighten-3'>
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <Parallax
          image={<img alt='' src={bark} />}
          options={{
            responsiveThreshold: 0
          }}
        />
      </div>
    </>
  )
}

export default App
