import { Box } from '@mui/material';

export interface ImageCardProps {
  altText: string;
  imageSrc: string;
}

export const ImageCard = ({ altText, imageSrc }: ImageCardProps) => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{ height: '30rem', width: '100vw', objectFit: 'cover' }}
      />
    </Box>
  );
};

export default ImageCard;
