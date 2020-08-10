import React, { useState } from 'react';
import { VideoCardContainer, VideoTitle, VideoTitleDiv } from './styles';
import ModalVideo from '../Modal';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function changeColor() {
  console.log('Oi');
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const [modalIsActivate, setModalIsActivate] = useState(false);

  return (
    <>
      <ModalVideo isActivate={modalIsActivate} hook={setModalIsActivate} url={videoURL} titulo={videoTitle} />
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
        onClick={() => { setModalIsActivate(true); }}
      >
        <VideoTitleDiv className="title-div">
          <VideoTitle className="title">
            {videoTitle}
          </VideoTitle>
        </VideoTitleDiv>

      </VideoCardContainer>
    </>
  );
}

export default VideoCard;
