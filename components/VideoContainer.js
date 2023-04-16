import React from 'react'
import ReactPlayer from 'react-player'

const VideoContainer = ({url, speed, loop}) => {
  return (
    <ReactPlayer 
          url={url} 
          muted={true} 
          playing={true}
          loop={loop}
          width='100%'
          height='100%'
          playbackRate={speed}
    />
  )
}

export default VideoContainer