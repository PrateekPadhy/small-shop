import { Box } from '@mui/material';

export interface ImageCardProps {
  altText: string;
  imageSrc: string;
}

export const ImageCard = ({ altText, imageSrc }: ImageCardProps) => {
  return (
    <Box
      sx={{
        // position: 'relative',
        overflow: 'hidden',
        height: '15rem',
        '@media screen and (min-width: 768px)': {
          height: '20rem',
        },
        '@media screen and (min-width: 992px)': {
          height: '30rem',
        },
        '@media screen and (min-width: 1200px)': {
          height: '40rem',
        },
      }}
    >
      <img
        src={imageSrc}
        alt={altText}
        style={{
          height: '100%',
          width: '100vw',
        }}
      />
    </Box>
  );
};

export default ImageCard;
