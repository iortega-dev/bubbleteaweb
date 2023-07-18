import { Container, Section, SliderWrapper, Subtitle, Title } from './Baldies.styled';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { images } from '../../assets/img/baldies';

const Baldies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: Math.floor(window.innerWidth / 204),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: false,
    swipeToSlide: true,
    centerMode: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const reverseSettings = { ...settings, rtl: true };

  const first16Images = Object.values(images).slice(0, 16);
  const second16Images = Object.values(images).slice(16, 32);

  const imageStyles = {
    maxWidth: '204px',
    maxHeight: '204px',
    width: 'auto',
    height: 'auto',
  };

  return (
    <Section id="baldies">
      <Container>
        <Title>Baldies Gallery</Title>
        <Subtitle>
          "Dive into the Bearded Baldies Gallery and immerse yourself in an ocean of diverse
          characters, each with their unique style and charm. These hand-crafted NFTs form a unique
          universe, where the audacious come to life. Discover the richness of our collection and
          experience the captivating allure of the Bearded Baldies."
        </Subtitle>
        <br />
      </Container>
      <SliderWrapper>
        <Slider {...settings}>
          {first16Images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Bearded Baldie ${index + 1}`} style={imageStyles} />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
      <SliderWrapper>
        <Slider {...reverseSettings}>
          {second16Images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Bearded Baldie ${index + 1}`} style={imageStyles} />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </Section>
  );
};

export default Baldies;
