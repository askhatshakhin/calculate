import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Video from './video/video'
import { Videos } from './videos'

function App() {
  return (
    <>
      <div className='video-container'>
        {
          Videos.map((video) => (
          <Video
          key = {video.id}
            title={video.title} 
            channelName={video.channelName} 
            img={video.img}
          />
        ))}
      </div>
    </>
      
  )
}

export default App
