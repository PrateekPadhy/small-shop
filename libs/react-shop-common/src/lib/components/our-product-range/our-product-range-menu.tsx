import { Stack, Typography } from '@mui/material';
import { OurProduct } from '../our-product/our-product';

export const OurProductRangeMenu = () => (
  <>
    <Typography
      variant="h3"
      textAlign="center"
      paddingTop={4}
      paddingBottom={1}
      fontWeight={500}
    >
      Our Product Range
    </Typography>

    <Stack
      flexWrap={'wrap'}
      direction={'row'}
      justifyContent="space-around"
      gap={2}
    >
      <OurProduct productName="Salwar Kameez"></OurProduct>
      <OurProduct productName="Gowns"></OurProduct>
      <OurProduct productName="Lehenga"></OurProduct>
      <OurProduct productName="Sarees"></OurProduct>
    </Stack>
  </>
);

export default OurProductRangeMenu;
