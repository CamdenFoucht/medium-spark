import React, { useState } from "react"
import ModalVideo from "react-modal-video"

const VideoPlayer = props => {
  const [url, setUrl] = useState("")

  const openPlayer = src => {
    setUrl(src)
  }

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
