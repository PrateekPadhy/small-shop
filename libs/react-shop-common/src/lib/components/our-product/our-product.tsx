import { Box, Stack, Typography } from '@mui/material';

type OurProductProps = {
  productName: string;
};
export const OurProduct = ({ productName }: OurProductProps) => (
  <Stack alignItems="center">
    <Box
      sx={{
        backgroundColor: '#EDD0A8',
        width: '10rem',
        height: '10rem',
        borderRadius: '50%',
      }}
    ></Box>
    <Typography>{productName}</Typography>
  </Stack>
);
