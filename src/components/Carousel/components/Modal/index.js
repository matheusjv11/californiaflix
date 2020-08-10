import React from 'react';
import Modal from 'react-modal';
import './modalvideo.css';
import YouTubeIframeResponsive from '../../../BannerMain/components/VideoIframeResponsive';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function ModalVideo({
  isActivate, hook, url, titulo,
}) {
  const youTubeID = getYouTubeId(url);
  return (
    <Modal isOpen={isActivate} className="ModalVideo" overlayClassName="OverlayVideo" onRequestClose={() => hook(false)}>
      <div className="ModalVideo-Div">

        <div className="Modal-Title">
          <h2>{titulo}</h2>
          <button className="ModalVideo-Button" onClick={() => hook(false)}>Fechar</button>
        </div>

        <p>
          Se inscreva no canal oficial do
          {' '}
          <a href="https://www.youtube.com/channel/UCEuOwB9vSL1oPKGNdONB4ig">
            Red Hot Chili Peppers
          </a>
        </p>
        <YouTubeIframeResponsive youtubeID={youTubeID} />
      </div>
    </Modal>
  );
}

export default ModalVideo;
