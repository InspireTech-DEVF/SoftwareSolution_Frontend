import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../img/slider1.webp'
import Slider2 from '../img/slider2.webp'
import Slider3 from '../img/slider3.webp'
import Slider4 from '../img/slider4.webp'
import Slider5 from '../img/slider5.webp'
import Slider6 from '../img/slider6.webp'

const Slider = () => {
  return (
    <Carousel data-bs-theme='dark'>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={Slider1}
          alt='First slide'
        />
        <Carousel.Caption />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={Slider2}
          alt='Second slide'
        />
        <Carousel.Caption />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={Slider3}
          alt='Third slide'
        />
        <Carousel.Caption />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={Slider4}
          alt='First slide'
        />
        <Carousel.Caption />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={Slider5}
          alt='First slide'
        />
        <Carousel.Caption />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={Slider6}
          alt='First slide'
        />
        <Carousel.Caption />
      </Carousel.Item>

    </Carousel>
  )
}

export default Slider
