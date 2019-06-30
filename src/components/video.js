import React from "react"
import styled from "styled-components"

const VidContainer = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
`
const Vid = styled.iframe`
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Video = props => {
  const { url, title } = props
  return (
    <VidContainer>
      <Vid src={url} title={title} allowFullScreen />
    </VidContainer>
  )
}

export default Video
