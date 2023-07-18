import { VideoContainer } from './BaldiesVideo.styled';

import BaldiesSlideshowVideoWebm from '../../../../assets/video/bb-slideshow.webm';
import BaldiesSlideshowVideoMp4 from '../../../../assets/video/bb-slideshow.mp4';

const BaldiesVideo = () => {
  return (
    <VideoContainer>
      <video autoPlay muted loop>
        <source src={BaldiesSlideshowVideoWebm} typeof="video/webm" />
        <source src={BaldiesSlideshowVideoMp4} typeof="video/mp4" />
      </video>
    </VideoContainer>
  );
};

export default BaldiesVideo;
