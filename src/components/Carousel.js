import React from 'react';
import Img from 'gatsby-image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';
import faArrowAltCircleRight from '@fortawesome/fontawesome-free-solid/faArrowAltCircleRight';
import Slide1 from '../img/12.jpg';
import Slide2 from '../img/13.jpg';
import Slide3 from '../img/14.jpg';
import Slide4 from '../img/15.jpg';
import Slide5 from '../img/16.jpg';

class ReactCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      totalSlides: 3,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      let currentSlide = this.state.currentSlide + 1;
      if (currentSlide === 3) currentSlide = 0;
      this.setState({ currentSlide });
    }, 3000);
  }

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={this.state.totalSlides}
        currentSlide={this.state.currentSlide}
      >
        <Slider>
          <Slide className="flex" index={0}>
            <img src={Slide1} alt="Georgina Cross" />
            <img src={Slide5} alt="Georgina Cross" />
            <img src={Slide2} alt="Georgina Cross" />
          </Slide>
          <Slide index={1}>
            <img src={Slide3} alt="Georgina Cross" />
          </Slide>
          <Slide index={2}>
            <img src={Slide4} alt="Georgina Cross" />
          </Slide>
        </Slider>
        <div className="carousel__buttons">
          <ButtonBack>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </ButtonBack>
          <ButtonNext>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </ButtonNext>
        </div>
        <DotGroup />
      </CarouselProvider>
    );
  }
}

export default ReactCarousel;
