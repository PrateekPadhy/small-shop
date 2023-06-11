import { Header, ImageCard } from '@palaks-shop/react-shop-common';
import Carousel from 'react-material-ui-carousel';
import { imageOne, imageThree, imageTwo } from '../../../assets';

export const Landing = () => (
  <>
    <Header></Header>
    <Carousel>
      <ImageCard altText="" imageSrc={imageOne} />
      <ImageCard altText="" imageSrc={imageTwo} />
      <ImageCard altText="" imageSrc={imageThree} />
    </Carousel>
  </>
);

export default Landing;
