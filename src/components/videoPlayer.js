import React, { useState } from "react"
import ModalVideo from "react-modal-video"

const VideoPlayer = props => {
  console.log(props.url)
  return (
    <div>
      <ModalVideo
        channel="custom"
        isOpen={props.src != ""}
        url={props.src}
        onClose={props.onClose}
      />
    </div>
  )
}

export default VideoPlayer
