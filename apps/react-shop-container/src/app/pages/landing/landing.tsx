import {
  Header,
  ImageCard,
  OurProductRangeMenu,
} from '@palaks-shop/react-shop-common';
import Carousel from 'react-material-ui-carousel';
import { imageOne, imageThree, imageTwo } from '../../../assets';
import { Container } from '@mui/material';

export const Landing = () => (
  <>
    <Header></Header>
    <Carousel>
      <ImageCard altText="" imageSrc={imageOne} />
      <ImageCard altText="" imageSrc={imageTwo} />
      <ImageCard altText="" imageSrc={imageThree} />
    </Carousel>

    <Container>
      <OurProductRangeMenu></OurProductRangeMenu>
    </Container>
  </>
);

export default Landing;
